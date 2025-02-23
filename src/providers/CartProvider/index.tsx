"use client";
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { CartActionTypes, CartProduct, CartState } from "./types";
import { CartContextType } from "./types";
import { Product } from "@/types/products";

const CartContext = createContext<CartContextType | undefined>(undefined);

const initialState: CartState = {
  products: [],
};

const cartReducer = (
  state: CartState,
  action: { type: string; payload?: Product | number }
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      let newProduct: CartProduct;
      let newCartProducts: CartProduct[];
      const product = action.payload as Product;
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        newProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };

        newCartProducts = state.products.map((product) => {
          if (product.id === newProduct.id) {
            return newProduct;
          }
          return product;
        });
      } else {
        newProduct = { ...product, quantity: 1 };
        newCartProducts = [...state.products, newProduct];
      }

      return {
        ...state,
        products: newCartProducts,
      };

    case CartActionTypes.DECREMENT_PRODUCT:
      const id = action.payload as number;
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === id) {
            if (product.quantity === 1) {
              return { ...product, quantity: 1 };
            }
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        }),
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case CartActionTypes.CLEAR_CART:
      return { ...state, products: [] };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (product?: Product) => {
    if (!product) return;

    dispatch({ type: CartActionTypes.ADD_PRODUCT, payload: product });
  };

  const removeProduct = (id?: number) => {
    if (!id) return;
    dispatch({ type: CartActionTypes.REMOVE_PRODUCT, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART, payload: undefined });
  };

  const decrementProduct = (id?: number) => {
    if (!id) return;
    dispatch({ type: CartActionTypes.DECREMENT_PRODUCT, payload: id });
  };

  const getProducts = () => {
    return state.products;
  };

  const getTotalItems = () => {
    return state.products.reduce((acc, product) => acc + product.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addProduct,
        removeProduct,
        clearCart,
        getProducts,
        getTotalItems,
        decrementProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

import { Product } from "@/types/products";

export type CartProduct = Product & { quantity: number };
export enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  DECREMENT_PRODUCT = "DECREMENT_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_CART = "CLEAR_CART",
}

export interface CartState {
  products: CartProduct[];
}

export interface CartActions {
  addProduct: (product?: Product) => void;
  removeProduct: (id?: number) => void;
  decrementProduct: (id?: number) => void;
  clearCart: () => void;
}

export interface CartSelectors {
  getTotalItems: () => number;
  getProducts: () => CartProduct[];
}

export interface CartContextType extends CartActions, CartSelectors {
  state: CartState;
}

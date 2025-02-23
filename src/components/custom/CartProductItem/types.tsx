import { CartProduct } from "@/providers/CartProvider/types";

export interface CartProductItemProps {
  product: CartProduct;
  onAddProduct: (product: CartProduct) => void;
  onRemoveProduct: (id: number) => void;
  onDecrementProduct: (id: number) => void;
}

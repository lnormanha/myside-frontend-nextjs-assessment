"use client";
import { CartProductItem } from "@/components/custom/CartProductItem";
import styles from "./cart.module.css";
import { Header } from "@/components/custom/Header";
import { useCart } from "@/providers/CartProvider";
import { Text } from "@/components/core/Text";
import { HStack } from "@/components/core/HStack";
import { Button } from "@/components/core/Button";
export default function Cart() {
  const {
    getProducts,
    addProduct,
    removeProduct,
    decrementProduct,
    getTotalItems,
    clearCart,
  } = useCart();

  const products = getProducts();

  const totalItems = getTotalItems();

  const cartTitle =
    totalItems > 0
      ? `Your Cart: ${totalItems} products in cart`
      : "Your Cart is empty";
  return (
    <div className={styles.page}>
      <Header title="MySide Fake Store - Cart" backButtonLink="/" />
      <div className={styles.main}>
        <HStack gap="1rem" alignItems="center" justifyContent="space-between">
          <Text as="h4" weight="bold">
            {cartTitle}
          </Text>
          {totalItems > 0 && (
            <Button variant="secondary" onClick={clearCart}>
              Clear
            </Button>
          )}
        </HStack>
        <div
          className={
            styles[
              products.length > 0 ? "products-container" : "empty-container"
            ]
          }
        >
          {products.length > 0 ? (
            products.map((product) => (
              <CartProductItem
                key={product.id}
                product={product}
                onAddProduct={addProduct}
                onRemoveProduct={removeProduct}
                onDecrementProduct={decrementProduct}
              />
            ))
          ) : (
            <Text as="h4">No products in cart</Text>
          )}
        </div>
      </div>
    </div>
  );
}

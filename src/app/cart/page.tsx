"use client";
import styles from "./cart.module.css";
import { Header } from "@/components/custom/Header";
import { ProductCard } from "@/components/custom/ProductCard";
import { useCart } from "@/providers/CartProvider";
export default function Cart() {
  const { getProducts } = useCart();

  const products = getProducts();

  return (
    <div className={styles.page}>
      <Header title="MySide Fake Store - Cart" backButtonLink="/" />
      <div className={styles.main}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

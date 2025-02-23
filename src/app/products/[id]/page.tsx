import styles from "./products-id.module.css";
import { ProductService } from "@/services/ProductService";
import { Text } from "@/components/core/Text";
import Image from "next/image";
import { Product } from "@/types/products";
import { Header } from "@/components/custom/Header";
import { HStack } from "@/components/core/HStack";

const productService = new ProductService();

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await productService.getProductById(Number(id));
  const product: Product = response.product;

  return (
    <div className={styles.page}>
      <Header title="MySide Fake Store - Product" backButtonLink="/" />
      <main className={styles.main}>
        <div className={styles["image-container"]}>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </div>
        <div className={styles["product-info-container"]}>
          <div className={styles["popular-tag"]}>
            <Text as="span" weight="bold">
              Popular
            </Text>
          </div>
          <Text as="h2" weight="bold">
            {product.title}
          </Text>
          <HStack>
            <Text as="h3" weight="medium">
              Brand:
            </Text>
            <Text as="h3" weight="medium" autoCapitalize>
              {product.brand}
            </Text>
          </HStack>

          <HStack>
            <Text as="h4" weight="medium">
              Model:
            </Text>
            <Text as="h4" weight="medium" autoCapitalize>
              {product.model}
            </Text>
          </HStack>

          <div className={styles["product-category-tag"]}>
            <Text as="span" weight="bold">
              Category:
            </Text>
            <Text as="span" weight="medium" autoCapitalize>
              {product.category}
            </Text>
          </div>
          <div className={styles["product-color-info"]}>
            <Text as="span" weight="bold">
              Color:
            </Text>
            <Text as="span" weight="medium" autoCapitalize>
              {product.color}
            </Text>
            <div
              className={styles["color-tag"]}
              style={{ backgroundColor: product.color }}
            />
          </div>
          <div className={styles["product-price-info-container"]}>
            <Text as="h3" weight="bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </Text>

            {product.discount > 0 && (
              <Text as="span" weight="medium" size="20px" color="#ff4800">
                - {product.discount}% off
              </Text>
            )}
          </div>
          <div className={styles["product-description-wrapper"]}>
            <Text as="span" weight="bold">
              Description:
            </Text>
            <Text align="justify">{product.description}</Text>
          </div>
        </div>
      </main>
    </div>
  );
}

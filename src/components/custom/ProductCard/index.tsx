"use client";
import Image from "next/image";
import { ProductCardProps } from "./types";
import { Container } from "./styles";
import { Text } from "@/components/core/Text";
import Link from "next/link";

export const ProductCard = ({
  id,
  title,
  price,
  image,
  description,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <Container data-testid="product-card">
        <Image
          data-testid="product-card-image"
          alt={title.slice(0, 20)}
          src={image}
          width={300}
          height={300}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />
        <Text as="h3" color="#FFF" data-testid="product-card-title">
          {title.slice(0, 20)}...
        </Text>
        <Text
          as="h4"
          weight="bold"
          color="#FFF"
          data-testid="product-card-price"
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
        <Text color="#FFF" data-testid="product-card-description">
          {description.slice(0, 50)}...
        </Text>
      </Container>
    </Link>
  );
};

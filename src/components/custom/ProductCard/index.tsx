"use client";
import Image from "next/image";
import { ProductCardProps } from "./types";
import { Container } from "./styles";
import { Text } from "@/components/core/Text";

export const ProductCard = ({
  title,
  price,
  image,
  description,
}: ProductCardProps) => {
  return (
    <Container data-testid="product-card">
      <Image
        data-testid="product-card-image"
        src={image}
        alt={title}
        width={100}
        height={100}
        style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
      />
      <Text as="h3" color="#FFF" data-testid="product-card-title">
        {title}
      </Text>
      <Text as="h4" weight="bold" color="#FFF" data-testid="product-card-price">
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </Text>
      <Text color="#FFF" data-testid="product-card-description">
        {description}
      </Text>
    </Container>
  );
};

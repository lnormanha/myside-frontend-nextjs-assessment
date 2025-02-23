"use client";
import { Button } from "@/components/core/Button";
import { Container } from "./styles";
import { HStack, VStack } from "@/styles/global.styles";
import { CartProductItemProps } from "./types";
import { Text } from "@/components/core/Text";
import Image from "next/image";
import { Eye, Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";

export const CartProductItem = ({
  product,
  onRemoveProduct,
  onAddProduct,
  onDecrementProduct,
}: CartProductItemProps) => {
  return (
    <Container>
      <HStack alignItems="center" justifyContent="space-between">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />
        <VStack>
          <Text as="h4">{product.title}</Text>
          <Text as="h4" weight="bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </Text>
        </VStack>
      </HStack>
      <HStack alignItems="center">
        <Button onClick={() => onDecrementProduct(product.id)} variant="icon">
          <Minus />
        </Button>
        <Text as="h4" weight="bold">
          {product.quantity}
        </Text>
        <Button onClick={() => onAddProduct(product)} variant="icon">
          <Plus />
        </Button>

        <Button onClick={() => onRemoveProduct(product.id)} variant="icon">
          <Trash color="red" />
        </Button>
        <Button variant="icon">
          <Link href={`/products/${product.id}`}>
            <Eye />
          </Link>
        </Button>
      </HStack>
    </Container>
  );
};

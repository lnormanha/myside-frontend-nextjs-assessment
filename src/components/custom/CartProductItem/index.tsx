"use client";
import { Button } from "@/components/core/Button";
import { Container } from "./styles";
import { CartProductItemProps } from "./types";
import { Text } from "@/components/core/Text";
import Image from "next/image";
import { Eye, Minus, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { HStack } from "@/components/core/HStack";
import { VStack } from "@/components/core/VStack";

export const CartProductItem = ({
  product,
  onRemoveProduct,
  onAddProduct,
  onDecrementProduct,
  "data-testid": dataTestId = "cart-product-item",
}: CartProductItemProps) => {
  const dynamicDataTestId = `${dataTestId}-${product.id}`;

  return (
    <Container data-testid={dynamicDataTestId}>
      <HStack gap="1rem" alignItems="center" justifyContent="space-between">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
          }}
          data-testid={`${dynamicDataTestId}-image`}
        />
        <VStack gap="0.5rem">
          <Text as="h4" data-testid={`${dynamicDataTestId}-title`}>
            {product.title}
          </Text>
          <Text
            as="h4"
            weight="bold"
            data-testid={`${dynamicDataTestId}-price`}
          >
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </Text>
        </VStack>
      </HStack>
      <HStack gap="1rem" alignItems="center">
        <Button
          onClick={() => onDecrementProduct(product.id)}
          variant="icon"
          data-testid={`${dynamicDataTestId}-decrement-button`}
        >
          <Minus />
        </Button>
        <Text
          as="h4"
          weight="bold"
          data-testid={`${dynamicDataTestId}-quantity`}
        >
          {product.quantity}
        </Text>
        <Button
          onClick={() => onAddProduct(product)}
          variant="icon"
          data-testid={`${dynamicDataTestId}-increment-button`}
        >
          <Plus />
        </Button>

        <Button
          onClick={() => onRemoveProduct(product.id)}
          variant="icon"
          data-testid={`${dynamicDataTestId}-remove-button`}
        >
          <Trash color="red" />
        </Button>
        <Button
          variant="icon"
          data-testid={`${dynamicDataTestId}-view-product-button`}
        >
          <Link href={`/products/${product.id}`}>
            <Eye />
          </Link>
        </Button>
      </HStack>
    </Container>
  );
};

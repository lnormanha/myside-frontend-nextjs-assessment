"use client";
import Image from "next/image";
import { ProductCardProps } from "./types";
import { Container } from "./styles";
import { Text } from "@/components/core/Text";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";
import { Button } from "@/components/core/Button";

export const ProductCard = ({
  product,
  "data-testid": dataTestId = "product-card",
}: ProductCardProps) => {
  const { id, title, price, image, description } = product;

  const { addProduct } = useCart();

  const handleAddProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addProduct(product);
  };

  const dynamicDataTestId = `${dataTestId}-${id}`;

  return (
    <Link href={`/products/${id}`}>
      <Container data-testid={dynamicDataTestId}>
        <Image
          data-testid={`${dynamicDataTestId}-image`}
          alt={title.slice(0, 20)}
          src={image}
          width={300}
          height={250}
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />
        <Text as="h3" color="#FFF" data-testid={`${dynamicDataTestId}-title`}>
          {title.slice(0, 20)}...
        </Text>
        <Text
          as="h4"
          weight="bold"
          color="#FFF"
          data-testid={`${dynamicDataTestId}-price`}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
        <Text color="#FFF" data-testid={`${dynamicDataTestId}-description`}>
          {description.slice(0, 50)}...
        </Text>
        <Button
          size="full"
          onClick={handleAddProduct}
          data-testid={`${dynamicDataTestId}-add-to-cart`}
        >
          Add to Cart
        </Button>
      </Container>
    </Link>
  );
};

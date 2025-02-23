"use client";
import { HeaderProps } from "./types";
import {
  CartQuantityTag,
  HeaderContainer,
  LeftContent,
  RightContent,
} from "./styles";
import { Button } from "@/components/core/Button";
import { Text } from "@/components/core/Text";
import { ArrowLeft, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";

export const Header = ({
  title,
  backButtonLink,
  onBackButtonClick,
}: HeaderProps) => {
  const { getTotalItems } = useCart();

  return (
    <HeaderContainer data-testid="header">
      <LeftContent data-testid="header-left-content">
        {(backButtonLink || onBackButtonClick) && (
          <Link href={backButtonLink || ""}>
            <Button
              onClick={onBackButtonClick}
              variant="icon"
              data-testid="header-back-button"
            >
              <ArrowLeft />
            </Button>
          </Link>
        )}
        <Text color="white" as="h2" weight="bold">
          {title}
        </Text>
      </LeftContent>
      <RightContent data-testid="header-right-content">
        {getTotalItems() > 0 && (
          <CartQuantityTag data-testid="header-cart-quantity-tag">
            <Text color="black" as="span" weight="bold">
              {getTotalItems()}
            </Text>
          </CartQuantityTag>
        )}
        <Link href="/cart">
          <Button variant="icon" data-testid="header-cart-button">
            <ShoppingBasket />
          </Button>
        </Link>
      </RightContent>
    </HeaderContainer>
  );
};

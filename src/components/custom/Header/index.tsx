"use client";
import { HeaderProps } from "./types";
import { HeaderContainer, LeftContent, RightContent } from "./styles";
import { Button } from "@/components/core/Button";
import { Text } from "@/components/core/Text";
import { ArrowLeft, ShoppingBasket } from "lucide-react";

export const Header = ({ title, onBackButtonClick }: HeaderProps) => {
  return (
    <HeaderContainer data-testid="header">
      <LeftContent data-testid="header-left-content">
        {onBackButtonClick && (
          <Button
            onClick={onBackButtonClick}
            variant="icon"
            data-testid="header-back-button"
          >
            <ArrowLeft />
          </Button>
        )}
        <Text color="white" as="h2" weight="bold">
          {title}
        </Text>
      </LeftContent>
      <RightContent data-testid="header-right-content">
        <Button
          onClick={onBackButtonClick}
          variant="icon"
          data-testid="header-cart-button"
        >
          <ShoppingBasket />
        </Button>
      </RightContent>
    </HeaderContainer>
  );
};

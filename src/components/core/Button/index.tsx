"use client";
import { ComponentType } from "react";
import { ButtonProps, ButtonVariants } from "./types";
import { Primary, Secondary, Outline } from "./styles";
import { Text } from "../Text";

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  onClick,
  bgColor,
  textStyle,
  hoverBgColor,
}: ButtonProps) => {
  const variantsByProp: Record<ButtonVariants, ComponentType<ButtonProps>> = {
    primary: Primary,
    secondary: Secondary,
    outline: Outline,
  };

  const Component = variantsByProp[variant];

  const textColorByProp: Record<ButtonVariants, string> = {
    primary: "#000",
    secondary: "#FFF",
    outline: "#FFF",
  };

  return (
    <Component
      size={size}
      disabled={disabled}
      onClick={onClick}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      textStyle={textStyle}
    >
      <Text
        size="16px"
        weight="bold"
        color={textColorByProp[variant]}
        {...textStyle}
      >
        {children}
      </Text>
    </Component>
  );
};

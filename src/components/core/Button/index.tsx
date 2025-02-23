"use client";
import { ComponentType } from "react";
import { ButtonProps, ButtonVariants } from "./types";
import { Primary, Secondary, Outline, Icon } from "./styles";
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
  "data-testid": dataTestId = "button",
}: ButtonProps) => {
  const variantsByProp: Record<ButtonVariants, ComponentType<ButtonProps>> = {
    primary: Primary,
    secondary: Secondary,
    outline: Outline,
    icon: Icon,
  };

  const Component = variantsByProp[variant];

  const textColorByProp: Record<ButtonVariants, string> = {
    primary: "#000",
    secondary: "#FFF",
    outline: "#FFF",
    icon: "#FFF",
  };

  if (variant === "icon") {
    return (
      <Component
        size="icon"
        disabled={disabled}
        onClick={onClick}
        bgColor={bgColor}
        hoverBgColor={hoverBgColor}
        textStyle={textStyle}
        data-testid={dataTestId}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      size={size}
      disabled={disabled}
      onClick={onClick}
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      textStyle={textStyle}
      data-testid={dataTestId}
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

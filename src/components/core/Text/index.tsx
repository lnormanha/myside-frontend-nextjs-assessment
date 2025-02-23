"use client";
import { ComponentType } from "react";
import { TextProps } from "./types";
import * as Styled from "./styles";

export const Text = ({
  children,
  size,
  weight,
  color = "white",
  align,
  as = "p",
  autoCapitalize = false,
  "data-testid": dataTestId = "core-text",
}: TextProps) => {
  type StyledComponents = {
    [K in typeof as]: ComponentType<TextProps>;
  };

  const components: StyledComponents = {
    p: Styled.P,
    span: Styled.Span,
    div: Styled.Div,
    h1: Styled.H1,
    h2: Styled.H2,
    h3: Styled.H3,
    h4: Styled.H4,
    h5: Styled.H5,
    h6: Styled.H6,
    a: Styled.A,
  };

  const Component = components[as];

  const text = autoCapitalize
    ? (children?.toString() || "").slice(0, 1).toUpperCase() +
      (children?.toString() || "").slice(1)
    : children;

  return (
    <Component
      size={size}
      weight={weight}
      color={color}
      align={align}
      data-testid={`${dataTestId}-variant-${as}`}
    >
      {text}
    </Component>
  );
};

"use client";
import { Container } from "./styles";
import { HStackProps } from "./types";

export const HStack = ({ children, ...props }: HStackProps) => {
  return <Container {...props}>{children}</Container>;
};

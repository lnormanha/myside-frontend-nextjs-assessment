import styled, { css } from "styled-components";
import { TextProps } from "./types";

const baseStyles = css<TextProps>`
  font-family: "Geist", sans-serif;
  color: ${(props) => props.color || "#000"};
  text-align: ${(props) => props.align || "left"};
`;

export const P = styled.p<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "16px"};
`;
export const Span = styled.span<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "16px"};
`;
export const Div = styled.div<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "16px"};
`;
export const H1 = styled.h1<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "40px"};
  font-weight: ${(props) => props.weight || "bold"};
`;
export const H2 = styled.h2<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "32px"};
  font-weight: ${(props) => props.weight || "semibold"};
`;
export const H3 = styled.h3<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "24px"};
  font-weight: ${(props) => props.weight || "semibold"};
`;
export const H4 = styled.h4<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "20px"};
  font-weight: ${(props) => props.weight || "semibold"};
`;
export const H5 = styled.h5<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "18px"};
  font-weight: ${(props) => props.weight || "medium"};
`;
export const H6 = styled.h6<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "medium"};
`;
export const A = styled.a<TextProps>`
  ${baseStyles}
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "normal"};
`;

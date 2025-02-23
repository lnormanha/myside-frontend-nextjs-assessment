import styled from "styled-components";
import { VStackProps } from "./types";

export const Container = styled.div<VStackProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;

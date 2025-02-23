import styled from "styled-components";
import { VStackProps } from "./types";
import { HStackProps } from "./types";

export const VStack = styled.div<VStackProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
`;

export const HStack = styled.div<HStackProps>`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`}
`;

import styled, { css } from "styled-components";
import { ButtonProps, ButtonSizes } from "./types";

const baseStyles = css<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "#000"};
  color: ${(props) => props.textStyle?.color || "#fff"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  height: 40px;
  --text-size: 16px;
  --text-weight: 400;
  &:hover {
    background-color: ${(props) => props.hoverBgColor || "#000"};
    --text-color: "#fff";
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const smallSizeStyles = css<ButtonProps>`
  height: 30px;
  width: 100px;
  --text-size: 12px;
  --text-weight: 400;
`;

const mediumSizeStyles = css<ButtonProps>`
  height: 40px;
  width: 200px;
  --text-size: 16px;
  --text-weight: 400;
`;

const largeSizeStyles = css<ButtonProps>`
  height: 50px;
  width: 300px;
  --text-size: 20px;
  --text-weight: 500;
`;

const fullSizeStyles = css<ButtonProps>`
  width: 100%;
`;

const sizesByProp: Record<ButtonSizes, ReturnType<typeof css<ButtonProps>>> = {
  small: smallSizeStyles,
  medium: mediumSizeStyles,
  large: largeSizeStyles,
  full: fullSizeStyles,
};

export const Primary = styled.button<ButtonProps>`
  ${baseStyles}
  ${({ size }) => sizesByProp[size ?? "medium"]}
  background-color: ${(props) => props.bgColor || "#FFF"};
  color: ${(props) => props.textStyle?.color || "#000"};
  &:hover {
    background-color: ${(props) => props.hoverBgColor || "#8a8a8a"};
    --text-color: #525252;
  }
`;

export const Secondary = styled.button<ButtonProps>`
  ${baseStyles}
  ${({ size }) => sizesByProp[size ?? "medium"]}
  background-color: ${(props) => props.bgColor || "#303030"};
  color: ${(props) => props.textStyle?.color || "#FFF"};
  &:hover {
    background-color: ${(props) => props.hoverBgColor || "#1a1a1a"};
    --text-color: #fff;
  }
`;

export const Outline = styled.button<ButtonProps>`
  ${baseStyles}
  ${({ size }) => sizesByProp[size ?? "medium"]}
  background-color: ${(props) => props.bgColor || "transparent"};
  color: ${(props) => props.textStyle?.color || "#ffffff"};
  border: 1px solid ${(props) => props.textStyle?.color || "#ffffff"};
  &:hover {
    background-color: ${(props) => props.hoverBgColor || "#ffffff0c"};
    --text-color: #fff;
    border: 1px solid ${(props) => props.textStyle?.color || "#ffffff"};
  }
`;

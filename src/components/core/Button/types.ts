import { TextProps } from "../Text/types";

export type ButtonVariants = "primary" | "secondary" | "outline";
export type ButtonSizes = "small" | "medium" | "large" | "full";

export type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  textStyle?: TextProps;
  bgColor?: string;
  hoverBgColor?: string;
  disabled?: boolean;
  onClick?: () => void;
} & React.PropsWithChildren;

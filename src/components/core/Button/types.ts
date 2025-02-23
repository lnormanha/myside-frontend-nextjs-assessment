import { TextProps } from "../Text/types";

export type ButtonVariants = "primary" | "secondary" | "outline" | "icon";
export type ButtonSizes = "small" | "medium" | "large" | "full" | "icon";

export interface ButtonProps extends React.PropsWithChildren {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  textStyle?: TextProps;
  bgColor?: string;
  hoverBgColor?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  "data-testid"?: string;
}

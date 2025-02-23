export type TextAs =
  | "p"
  | "span"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "a";
export type TextWeight = "light" | "normal" | "medium" | "semibold" | "bold";
export type TextAlign = "left" | "center" | "right" | "justify";

export interface TextProps extends React.PropsWithChildren {
  as?: TextAs;
  size?: string;
  weight?: TextWeight;
  color?: string;
  align?: TextAlign;
  autoCapitalize?: boolean;
  "data-testid"?: string;
}

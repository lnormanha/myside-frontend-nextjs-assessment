export type TextProps = {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a";
  size?: string;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: string;
  align?: "left" | "center" | "right";
} & React.PropsWithChildren;

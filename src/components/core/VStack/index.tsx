import { Container } from "./styles";
import { VStackProps } from "./types";

export const VStack = ({ children, ...props }: VStackProps) => {
  return <Container {...props}>{children}</Container>;
};

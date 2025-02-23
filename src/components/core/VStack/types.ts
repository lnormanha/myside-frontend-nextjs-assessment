import { CSSProperties } from "react";

export interface VStackProps extends React.PropsWithChildren, CSSProperties {
  "data-testid"?: string;
}

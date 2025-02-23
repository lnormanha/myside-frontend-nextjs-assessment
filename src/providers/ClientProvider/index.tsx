"use client";
import { ReactNode } from "react";
import { CartProvider } from "@/providers/CartProvider";
import StyledComponentsRegistry from "@/lib/registry";

export function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <CartProvider>{children}</CartProvider>
    </StyledComponentsRegistry>
  );
}

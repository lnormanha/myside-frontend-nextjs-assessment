import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./index";
import { ServerStyleSheet } from "styled-components";
import { mockProduct } from "@/mocks/products";
import { mockCartProvider } from "@/mocks/cart";

jest.mock("@/providers/CartProvider", () => ({
  useCart: () => mockCartProvider,
}));

describe("ProductCard", () => {
  let sheet: ServerStyleSheet;

  beforeEach(() => {
    sheet = new ServerStyleSheet();
    jest.spyOn(sheet, "collectStyles");
  });

  const productCardDataTestId = "product-card-1";

  it("Should render the product card", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByTestId(productCardDataTestId)).toBeInTheDocument();
  });

  it("Should render the product card image", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByTestId(`${productCardDataTestId}-image`)
    ).toBeInTheDocument();
  });

  it("Should render the product card title", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByTestId(`${productCardDataTestId}-title-variant-h3`)
    ).toBeInTheDocument();
  });

  it("Should render the product card price", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByTestId(`${productCardDataTestId}-price-variant-h4`)
    ).toBeInTheDocument();
  });

  it("Should render the product card description", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByTestId(`${productCardDataTestId}-description-variant-p`)
    ).toBeInTheDocument();
  });
});

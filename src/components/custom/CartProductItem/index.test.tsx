import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import { CartProductItem } from "./index";
import { ServerStyleSheet } from "styled-components";
import { mockCartProduct } from "@/mocks/products";
import { mockCartProvider } from "@/mocks/cart";

jest.mock("@/providers/CartProvider", () => ({
  useCart: () => mockCartProvider,
}));

describe("CartProductItem", () => {
  let sheet: ServerStyleSheet;
  const onAddProduct = jest.fn();
  const onRemoveProduct = jest.fn();
  const onDecrementProduct = jest.fn();

  beforeEach(() => {
    sheet = new ServerStyleSheet();
    jest.spyOn(sheet, "collectStyles");
  });

  const cartProductItemDataTestId = "cart-product-item-1";

  it("Should render the cart product item", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(screen.getByTestId(cartProductItemDataTestId)).toBeInTheDocument();
  });

  it("Should render the cart product item image", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(
      screen.getByTestId(`${cartProductItemDataTestId}-image`)
    ).toBeInTheDocument();
  });

  it("Should render the cart product item title", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(
      screen.getByTestId(`${cartProductItemDataTestId}-title-variant-h4`)
    ).toBeInTheDocument();
  });

  it("Should render the cart product item price", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(
      screen.getByTestId(`${cartProductItemDataTestId}-price-variant-h4`)
    ).toBeInTheDocument();
  });

  it("Should render the cart product item decrement button", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(
      screen.getByTestId(`${cartProductItemDataTestId}-decrement-button`)
    ).toBeInTheDocument();
  });

  it("Should render the cart product item increment button", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(
      screen.getByTestId(`${cartProductItemDataTestId}-increment-button`)
    ).toBeInTheDocument();
  });

  it("Should render the cart product item remove button", () => {
    render(
      <CartProductItem
        product={mockCartProduct}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        onDecrementProduct={onDecrementProduct}
      />
    );
    expect(
      screen.getByTestId(`${cartProductItemDataTestId}-remove-button`)
    ).toBeInTheDocument();
  });
});

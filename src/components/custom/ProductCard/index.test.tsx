import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./index";
import { ServerStyleSheet } from "styled-components";

describe("ProductCard", () => {
  let sheet: ServerStyleSheet;
  beforeEach(() => {
    sheet = new ServerStyleSheet();
    jest.spyOn(sheet, "collectStyles");
  });

  it("Should render the product card", () => {
    render(
      <ProductCard
        id={1}
        title="Product 1"
        price={100}
        image="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
        description="Product 1 description"
      />
    );
    expect(screen.getByTestId("product-card")).toBeInTheDocument();
  });

  it("Should render the product card image", () => {
    render(
      <ProductCard
        id={1}
        title="Product 1"
        price={100}
        image="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
        description="Product 1 description"
      />
    );
    expect(screen.getByTestId("product-card-image")).toBeInTheDocument();
  });

  it("Should render the product card title", () => {
    render(
      <ProductCard
        id={1}
        title="Product 1"
        price={100}
        image="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
        description="Product 1 description"
      />
    );
    expect(
      screen.getByTestId("product-card-title-variant-h3")
    ).toBeInTheDocument();
  });

  it("Should render the product card price", () => {
    render(
      <ProductCard
        id={1}
        title="Product 1"
        price={100}
        image="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
        description="Product 1 description"
      />
    );
    expect(
      screen.getByTestId("product-card-price-variant-h4")
    ).toBeInTheDocument();
  });

  it("Should render the product card description", () => {
    render(
      <ProductCard
        id={1}
        title="Product 1"
        price={100}
        image="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
        description="Product 1 description"
      />
    );
    expect(
      screen.getByTestId("product-card-description-variant-p")
    ).toBeInTheDocument();
  });
});

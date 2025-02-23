import "@testing-library/jest-dom";
import "jest-styled-components";
import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "./index";
import { ServerStyleSheet } from "styled-components";
import { mockCartProvider } from "@/mocks/cart";

jest.mock("@/providers/CartProvider", () => ({
  useCart: () => mockCartProvider,
}));

describe("Header", () => {
  let sheet: ServerStyleSheet;
  beforeEach(() => {
    sheet = new ServerStyleSheet();
    jest.spyOn(sheet, "collectStyles");
  });

  it("Should render the header", () => {
    render(<Header title="MySide Fake Store" />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("Should render the header cart button", () => {
    render(<Header title="MySide Fake Store" />);
    expect(screen.getByTestId("header-cart-button")).toBeInTheDocument();
  });

  it("Should render the header left content", () => {
    render(<Header title="MySide Fake Store" />);
    expect(screen.getByTestId("header-left-content")).toBeInTheDocument();
  });

  it("Should render the header right content", () => {
    render(<Header title="MySide Fake Store" />);
    expect(screen.getByTestId("header-right-content")).toBeInTheDocument();
  });

  describe("Props - onBackButtonClick", () => {
    it("Should show the back button when the onBackButtonClick prop is provided", () => {
      const onBackButtonClick = jest.fn();
      render(
        <Header
          title="MySide Fake Store"
          onBackButtonClick={onBackButtonClick}
        />
      );
      expect(screen.getByTestId("header-back-button")).toBeInTheDocument();
    });

    it("Should not show the back button when the onBackButtonClick prop is not provided", () => {
      render(<Header title="MySide Fake Store" />);
      expect(
        screen.queryByTestId("header-back-button")
      ).not.toBeInTheDocument();
    });

    it("Should call the onBackButtonClick prop when the back button is clicked", () => {
      const onBackButtonClick = jest.fn();
      render(
        <Header
          title="MySide Fake Store"
          onBackButtonClick={onBackButtonClick}
        />
      );
      fireEvent.click(screen.getByTestId("header-back-button"));
      expect(onBackButtonClick).toHaveBeenCalled();
    });
  });
});

import "@testing-library/jest-dom";
import "jest-styled-components";
import { render } from "@testing-library/react";
import { Button } from "./index";
import { ServerStyleSheet } from "styled-components";

describe("Button", () => {
  let sheet: ServerStyleSheet;
  beforeEach(() => {
    sheet = new ServerStyleSheet();
    jest.spyOn(sheet, "collectStyles");
  });

  it("Should render a button", () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("Props - Size", () => {
    it("Should render a button with a small size", () => {
      const { container } = render(<Button size="small">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("height", "30px");
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a button with a medium size", () => {
      const { container } = render(<Button size="medium">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("height", "40px");
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a button with a large size", () => {
      const { container } = render(<Button size="large">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("height", "50px");
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a button with a full size", () => {
      const { container } = render(<Button size="full">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("width", "100%");
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("Props - Variant", () => {
    it("Should render a button with a primary variant", () => {
      const { container } = render(<Button variant="primary">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("background-color", "#FFF");
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a button with a secondary variant", () => {
      const { container } = render(
        <Button variant="secondary">Click me</Button>
      );
      expect(container.firstChild).toHaveStyleRule(
        "background-color",
        "#303030"
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a button with a outline variant", () => {
      const { container } = render(<Button variant="outline">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule(
        "background-color",
        "transparent"
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("Props - Disabled", () => {
    it("Should render a disabled button", () => {
      const { container } = render(<Button disabled>Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("opacity", "0.5", {
        modifier: ":disabled",
      });
      expect(container.firstChild).toHaveStyleRule("cursor", "not-allowed", {
        modifier: ":disabled",
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("Props - Bg Color", () => {
    it("Should render a button with a bg color", () => {
      const { container } = render(<Button bgColor="red">Click me</Button>);
      expect(container.firstChild).toHaveStyleRule("background-color", "red");
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("Props - Hover Bg Color", () => {
    it("Should render a button with a hover bg color", () => {
      const { container } = render(
        <Button hoverBgColor="red">Click me</Button>
      );
      expect(container.firstChild).toHaveStyleRule("background-color", "red", {
        modifier: ":hover",
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

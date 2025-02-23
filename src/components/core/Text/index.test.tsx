import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import { Text } from "./index";
import { ServerStyleSheet } from "styled-components";

describe("Text", () => {
  describe("Props - Variants (as)", () => {
    it("Should render a 'p' tag", () => {
      render(<Text as="p">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-p")).toBeInTheDocument();
    });

    it("Should render a 'span' tag", () => {
      render(<Text as="span">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-span")).toBeInTheDocument();
    });

    it("Should render a 'div' tag", () => {
      render(<Text as="div">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-div")).toBeInTheDocument();
    });

    it("Should render a 'h1' tag", () => {
      render(<Text as="h1">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-h1")).toBeInTheDocument();
    });

    it("Should render a 'h2' tag", () => {
      render(<Text as="h2">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-h2")).toBeInTheDocument();
    });

    it("Should render a 'h3' tag", () => {
      render(<Text as="h3">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-h3")).toBeInTheDocument();
    });

    it("Should render a 'h4' tag", () => {
      render(<Text as="h4">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-h4")).toBeInTheDocument();
    });

    it("Should render a 'h5' tag", () => {
      render(<Text as="h5">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-h5")).toBeInTheDocument();
    });

    it("Should render a 'h6' tag", () => {
      render(<Text as="h6">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-h6")).toBeInTheDocument();
    });

    it("Should render a 'a' tag", () => {
      render(<Text as="a">Hello</Text>);
      expect(screen.getByTestId("core-text-variant-a")).toBeInTheDocument();
    });
  });

  describe("Props - Size", () => {
    beforeEach(() => {
      const sheet = new ServerStyleSheet();
      jest.spyOn(sheet, "collectStyles");
    });

    it("Should render a 'p' tag with a 'size' prop", () => {
      const { container } = render(
        <Text as="p" size="16px">
          Hello
        </Text>
      );
      expect(container.firstChild).toHaveStyleRule(
        "font-size",
        "var(--text-size,16px)"
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a 'p' tag with a 'color' prop", () => {
      const { container } = render(
        <Text as="p" color="red">
          Hello
        </Text>
      );

      expect(container.firstChild).toHaveStyleRule(
        "color",
        "var(--text-color,red)"
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a 'p' tag with a 'weight' prop", () => {
      const { container } = render(
        <Text as="p" weight="semibold">
          Hello
        </Text>
      );

      expect(container.firstChild).toHaveStyleRule(
        "font-weight",
        "var(--text-weight,semibold)"
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it("Should render a 'p' tag with a 'align' prop", () => {
      const { container } = render(
        <Text as="p" align="center">
          Hello
        </Text>
      );

      expect(container.firstChild).toHaveStyleRule("text-align", "center");
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

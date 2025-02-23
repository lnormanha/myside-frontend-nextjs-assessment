import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";
import { FilterBar } from "./index";
import { ServerStyleSheet } from "styled-components";

jest.mock("next/navigation", () => {
  const actual = jest.requireActual("next-router-mock");
  return {
    ...actual,
    useSearchParams: () => ({
      get: jest.fn(),
    }),
  };
});

describe("FilterBar", () => {
  let sheet: ServerStyleSheet;
  const categories = [
    "audio",
    "tv",
    "gaming",
    "laptop",
    "mobile",
    "appliances",
  ];

  beforeEach(() => {
    sheet = new ServerStyleSheet();
    jest.spyOn(sheet, "collectStyles");
  });

  it("Should render", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("filter-bar")).toBeInTheDocument();
  });

  it("Should render the search input", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("Should render the category select", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("category-select")).toBeInTheDocument();
  });

  it("Should render the sort select", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("sort-select")).toBeInTheDocument();
  });

  it("Should render the per page select", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("per-page-select")).toBeInTheDocument();
  });

  it("Should render the page select", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("page-select")).toBeInTheDocument();
  });

  it("Should render the filter button", () => {
    render(
      <FilterBar
        categories={categories}
        selectedCategory=""
        selectedSort=""
        search=""
      />
    );

    expect(screen.getByTestId("filter-button")).toBeInTheDocument();
  });
});

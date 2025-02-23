"use client";
import {
  Container,
  SearchInput,
  Select,
  InputContainer,
  Option,
  HStack,
} from "./styles";
import { FilterBarProps } from "./types";
import { useState } from "react";

import { Text } from "@/components/core/Text";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../core/Button";

export const FilterBar = ({
  categories,
  selectedCategory,
  selectedSort,
  search,
}: FilterBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(search);
  const [categoryValue, setCategoryValue] = useState(selectedCategory);
  const [sortValue, setSortValue] = useState(selectedSort);
  const [perPageValue, setPerPageValue] = useState(10);
  const [pageValue, setPageValue] = useState(1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryValue(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerPageValue(parseInt(e.target.value));
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageValue(parseInt(e.target.value));
  };

  const handleFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.set("search", searchValue);
    params.set("type", categoryValue);
    params.set("sort", sortValue);
    params.set("limit", perPageValue.toString());
    params.set("page", pageValue.toString());

    router.push(`/?${params.toString()}`);
  };

  return (
    <Container data-testid="filter-bar">
      <InputContainer>
        <Text color="white" weight="medium">
          Search:
        </Text>
        <SearchInput
          data-testid="search-input"
          value={searchValue}
          onChange={handleSearch}
        />
      </InputContainer>

      <HStack>
        <InputContainer>
          <Text color="white" weight="medium">
            Category:
          </Text>
          <Select
            data-testid="category-select"
            value={categoryValue}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <Option key={category} value={category}>
                {category.toUpperCase()}
              </Option>
            ))}
          </Select>
        </InputContainer>
        <InputContainer>
          <Text color="white" weight="medium">
            Sort:
          </Text>
          <Select
            value={sortValue}
            onChange={handleSortChange}
            data-testid="sort-select"
          >
            <Option value="desc">Price: High to Low</Option>
            <Option value="asc">Price: Low to High</Option>
          </Select>
        </InputContainer>

        <InputContainer>
          <Text color="white" weight="medium">
            Per Page:
          </Text>
          <Select
            value={perPageValue}
            onChange={handlePerPageChange}
            data-testid="per-page-select"
          >
            <Option value="10">10</Option>
            <Option value="20">20</Option>
            <Option value="30">30</Option>
          </Select>
        </InputContainer>

        <InputContainer>
          <Text color="white" weight="medium">
            Page:
          </Text>
          <Select
            value={pageValue}
            onChange={handlePageChange}
            data-testid="page-select"
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
          </Select>
        </InputContainer>
        <Button onClick={handleFilter} data-testid="filter-button">
          Filter
        </Button>
      </HStack>
    </Container>
  );
};

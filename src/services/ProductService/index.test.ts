import { ProductService } from ".";
import { MockedProductServiceResponse } from "@/mocks/products";
import mockedFetch from "@/mocks/fetch";

describe("ProductService", () => {
  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService(mockedFetch);
  });

  describe("ProductService - Constructor and methods", () => {
    test("Should be defined", () => {
      expect(productService).toBeDefined();
    });

    test("Should have getProducts method", () => {
      expect(productService.getProducts).toBeDefined();
    });

    test("Should have getProductById method", () => {
      expect(productService.getProductById).toBeDefined();
    });

    test("Should have getProductsCategories method", () => {
      expect(productService.getProductsCategories).toBeDefined();
    });
  });

  describe("ProductService - getProducts", () => {
    test("Should return products", async () => {
      const mockedResponse = MockedProductServiceResponse.success.getProducts;

      jest
        .spyOn(productService, "getProducts")
        .mockResolvedValue(mockedResponse);

      const response = await productService.getProducts();

      expect(response).toBeDefined();
      expect(response.products).toBeDefined();
      expect(response.products.length).toBeGreaterThan(0);
      expect(response.products).toEqual(mockedResponse.products);
    });

    test("Should return products with limit and page", async () => {
      const mockedResponse =
        MockedProductServiceResponse.success.getProductsWithLimit;

      jest
        .spyOn(productService, "getProducts")
        .mockResolvedValue(mockedResponse);

      const response = await productService.getProducts({
        page: 1,
        limit: 10,
      });

      expect(response).toBeDefined();
      expect(response.products).toBeDefined();
      expect(response.products.length).toBeGreaterThan(0);
      expect(response.products.length).toBeLessThanOrEqual(10);
    });

    test("Should handle invalid response structure when fetching products", async () => {
      jest.spyOn(productService, "getProducts").mockResolvedValue({});

      const response = await productService.getProducts();

      expect(response).toBeDefined();
      expect(response.products).toBeUndefined();
    });
  });

  describe("ProductService - getProductById", () => {
    test("Should return product by id", async () => {
      const mockedResponse =
        MockedProductServiceResponse.success.getProductById;

      jest
        .spyOn(productService, "getProductById")
        .mockResolvedValue(mockedResponse);

      const response = await productService.getProductById(1);

      expect(response).toBeDefined();
      expect(response.product).toBeDefined();
      expect(response.product.id).toBe(1);
    });

    test("Should handle error when fetching product by id", async () => {
      jest
        .spyOn(productService, "getProductById")
        .mockRejectedValue(new Error("Product not found"));

      await expect(productService.getProductById(999)).rejects.toThrow(
        "Product not found"
      );
    });
  });

  describe("ProductService - getProductsCategories", () => {
    test("Should return products categories", async () => {
      const mockedResponse =
        MockedProductServiceResponse.success.getProductsCategories;

      jest
        .spyOn(productService, "getProductsCategories")
        .mockResolvedValue(mockedResponse);

      const response = await productService.getProductsCategories();

      expect(response).toBeDefined();
      expect(response.categories).toBeDefined();
      expect(response.categories.length).toBeGreaterThan(0);
    });

    test("Should handle error when fetching categories", async () => {
      jest
        .spyOn(productService, "getProductsCategories")
        .mockRejectedValue(new Error("Categories not found"));

      await expect(productService.getProductsCategories()).rejects.toThrow(
        "Categories not found"
      );
    });
  });
});

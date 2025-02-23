import { BaseService } from "../BaseService";
import {
  IProductService,
  IProductServiceParams,
  IGetProductsResponse,
} from "./types";

export class ProductService extends BaseService implements IProductService {
  constructor(fetch?: typeof globalThis.fetch) {
    super(fetch);
  }

  async getProducts(
    params?: IProductServiceParams
  ): Promise<IGetProductsResponse> {
    const response = await this.get("/products", params);
    return response;
  }

  async getProductById(id: number) {
    const response = await this.get(`/products/${id}`);
    return response;
  }

  async getProductsCategories() {
    const response = await this.get("/products/category");
    return response;
  }

  async getProductsByCategory(
    params?: IProductServiceParams
  ): Promise<IGetProductsResponse> {
    const response = await this.get(`/products/category`, params);
    return response;
  }
}

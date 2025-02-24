import { Product } from "@/types/products";
import { IBaseServiceResponse } from "../BaseService/types";

export interface IProductServiceParams {
  type?: string;
  page: number;
  limit: number;
  sort?: string;
}

export interface IGetProductsResponse extends IBaseServiceResponse {
  products: Product[];
}

export interface IGetProductByIdResponse extends IBaseServiceResponse {
  product: Product;
}
export interface IGetProductsCategoriesResponse extends IBaseServiceResponse {
  categories: string[];
}

export interface IProductService {
  getProducts(params: IProductServiceParams): Promise<IGetProductsResponse>;
  getProductById(id: number): Promise<IGetProductByIdResponse>;
  getProductsCategories(): Promise<IGetProductsCategoriesResponse>;
}

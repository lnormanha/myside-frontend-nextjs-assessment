import { CartProduct } from "@/providers/CartProvider/types";
import { Product } from "@/types/products";

// Mocked Products
export const mockProduct: Product = {
  id: 1,
  title:
    "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
  image:
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  price: 773,
  description:
    "The Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver) is a high-quality audio device that offers a comfortable fit and excellent sound quality. It features Bluetooth connectivity, a built-in microphone, and a sleek design. The headphones are designed for use with smartphones, tablets, and other devices that support Bluetooth audio.",
  category: "audio",
  brand: "Sony",
  model: "WH-1000XM3",
  color: "Silver",
  discount: 0,
  popular: true,
};

export const mockCartProduct: CartProduct = {
  ...mockProduct,
  quantity: 1,
};

const mockCategories = ["audio", "electronics", "fashion"];

// Success Products Responses
const mockedGetProductsSuccess = Array(4).fill(mockProduct);
const mockedGetProductsWithLimitSuccess = Array(10).fill(mockProduct);

export const MockedProductServiceResponse = {
  success: {
    getProducts: {
      status: "SUCCESS",
      message: "Products fetched successfully",
      products: mockedGetProductsSuccess,
    },
    getProductsWithLimit: {
      status: "SUCCESS",
      message: "Products fetched successfully",
      products: mockedGetProductsWithLimitSuccess,
    },
    getProductById: {
      status: "SUCCESS",
      message: "Product fetched successfully",
      product: mockProduct,
    },
    getProductsCategories: {
      status: "SUCCESS",
      message: "Products categories fetched successfully",
      categories: mockCategories,
    },
  },
};

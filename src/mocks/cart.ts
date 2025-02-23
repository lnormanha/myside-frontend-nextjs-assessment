// mocks/cart.ts
export const mockCartProvider = {
  products: [],
  addProduct: jest.fn(),
  removeProduct: jest.fn(),
  decrementProduct: jest.fn(),
  getTotalItems: jest.fn().mockReturnValue(0),
  getProducts: jest.fn().mockReturnValue([]),
  clearCart: jest.fn(),
};

export const mockedUseCart = jest.fn().mockReturnValue(mockCartProvider);

// Then in your test file:

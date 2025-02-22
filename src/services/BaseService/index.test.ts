import mockedFetch from "@/mocks/fetch";
import { BaseService } from "./index";

describe("BaseService", () => {
  let baseService: BaseService;

  beforeAll(() => {
    baseService = new BaseService(mockedFetch);
  });

  test("Base Service should be defined", () => {
    expect(baseService).toBeDefined();
  });

  test("Base Service should have apiUrl", () => {
    expect(baseService.apiUrl).toBeDefined();
  });

  test("Base Service should have get method", () => {
    expect(baseService.get).toBeDefined();
  });

  test("Get method should return a promise", () => {
    expect(baseService.get("/products")).toBeInstanceOf(Promise);
  });
});

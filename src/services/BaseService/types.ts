export interface IBaseService {
  apiUrl: string;
  fetch: typeof globalThis.fetch;
  get(path: string, params?: Record<string, any>): Promise<any>;
}

export interface IBaseServiceResponse {
  status: "SUCCESS" | "ERROR";
  message: string;
}

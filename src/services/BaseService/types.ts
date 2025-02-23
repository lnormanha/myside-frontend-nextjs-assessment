export interface IBaseService {
  apiUrl: string;
  fetch: typeof globalThis.fetch;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get(path: string, params?: Record<string, any>): Promise<any>;
}

export interface IBaseServiceResponse {
  status: "SUCCESS" | "ERROR";
  message: string;
}

export interface IBaseService {
  apiUrl: string;
  fetch: typeof globalThis.fetch;
  get(path: string, params?: Record<string, string>): Promise<any>;
}

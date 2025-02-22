import { IBaseService } from "./types";

export class BaseService implements IBaseService {
  readonly apiUrl: string;
  readonly fetch: typeof globalThis.fetch;
  // Only GET method as it's the only we'll use for this assessment
  // POST, PUT, PATCH, DELETE methods can be added if needed

  constructor(fetch?: typeof globalThis.fetch) {
    this.apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
    this.fetch = fetch || globalThis.fetch;
  }

  async get(path: string, params?: Record<string, string>) {
    const response = await this.fetch(
      `${this.apiUrl}/${path}?${new URLSearchParams(params).toString()}`
    );
    return response.json();
  }
}

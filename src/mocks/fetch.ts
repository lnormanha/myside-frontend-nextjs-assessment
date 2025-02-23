export const mockedFetch: typeof globalThis.fetch = jest.fn(
  (input: string | URL | globalThis.Request) => {
    // Validate URL
    if (typeof input === "string" || input instanceof URL) {
      try {
        new URL(input.toString());
      } catch {
        throw new Error("Invalid URL");
      }
    } else {
      throw new Error("Input must be a string or URL");
    }

    return Promise.resolve({
      json: jest.fn().mockResolvedValue({}),
    } as unknown as Promise<Response>);
  }
);

export default mockedFetch;

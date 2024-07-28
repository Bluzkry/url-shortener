type LocalCache = {
  urlToHash: Record<string, string>;
  hashToUrl: Record<string, string>;
};

export const localCache: LocalCache = {
  urlToHash: {},
  hashToUrl: {},
};

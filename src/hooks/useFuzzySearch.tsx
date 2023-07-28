import fuzzysort from 'fuzzysort';

function useFuzzySearch<T>(
  query: string,
  keys: string[],
  data: T[],
  visibleItems?: number | undefined
) {
  const results = fuzzysort.go(query, data, {
    all: true,
    threshold: -9999,
    limit: visibleItems,
    keys,
    scoreFn: (a) => {
      return Math.max(
        a[0] ? a[0].score : -10000,
        a[1] ? a[1].score - 100 : -10000
      );
    },
  });
  return results.map((r) => r.obj);
}

export default useFuzzySearch;

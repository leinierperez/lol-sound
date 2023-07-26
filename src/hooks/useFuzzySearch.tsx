import fuzzysort from 'fuzzysort';

function useFuzzySearch<T>(query: string, key: string, data: T[]) {
  const results = fuzzysort.go(query, data, {
    threshold: -10000,
    key,
  });

  return results.map((r) => r.obj);
}

export default useFuzzySearch;

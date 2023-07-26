import fuzzysort from 'fuzzysort';

function useFuzzySearch<T>(query: string, keys: string[], data: T[]) {
  const results = fuzzysort.go(query, data, { threshold: -10000, keys });
  return results.map((r) => r.obj);
}

export default useFuzzySearch;

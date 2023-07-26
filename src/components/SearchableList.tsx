import useFuzzySearch from '@/hooks/useFuzzySearch';
import { Fragment } from 'react';

type Props<T> = {
  query: string;
  data: T[];
  keyToSearch: string[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
};

function SearchableList<T extends {}>({
  query,
  data,
  renderItem,
  keyToSearch,
  keyExtractor,
}: Props<T>) {
  const queriedData = useFuzzySearch(query, keyToSearch, data);

  return (
    <Fragment>
      {(queriedData.length > 0 || query.length > 0 ? queriedData : data).map(
        (item) => {
          return (
            <li className="list-none" key={keyExtractor(item)}>
              {renderItem(item)}
            </li>
          );
        }
      )}
    </Fragment>
  );
}

export default SearchableList;

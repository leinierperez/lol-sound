import useFuzzySearch from '@/hooks/useFuzzySearch';
import { Fragment } from 'react';

type Props<T> = {
  query: string;
  data: T[];
  keyToSearch: string[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
  visibleItems?: number;
};

function SearchableList<T extends {}>({
  query,
  data,
  renderItem,
  keyToSearch,
  keyExtractor,
  visibleItems,
}: Props<T>) {
  const queriedData = useFuzzySearch(query, keyToSearch, data, visibleItems);

  return (
    <Fragment>
      {queriedData.slice(0, visibleItems).map((item, i) => {
        return (
          <li className="list-none" key={keyExtractor(item)}>
            {renderItem(item, i)}
          </li>
        );
      })}
    </Fragment>
  );
}

export default SearchableList;

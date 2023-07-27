type Props<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
  className?: string;
};

function List<T extends {}>({
  items,
  renderItem,
  keyExtractor,
  className,
}: Props<T>) {
  return (
    <ul className={className}>
      {items.map((item, i) => {
        return (
          <li className="list-none" key={keyExtractor(item)}>
            {renderItem(item, i)}
          </li>
        );
      })}
    </ul>
  );
}

export default List;

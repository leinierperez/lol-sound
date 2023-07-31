import InfiniteScroller from '@/components/InfiniteScroller';
import List from '@/components/List';
import Quote from '@/components/Quote';
import useFuzzySearch from '@/hooks/useFuzzySearch';
import { shuffle } from '@/utils/arrays';
import getChampionData from '@/utils/getChampionData';
import { InferGetStaticPropsType } from 'next';
import { useState } from 'react';

type QuoteData = {
  name: string;
  icon: string;
  quote: string;
  url: string;
};

export async function getStaticProps() {
  const data = await getChampionData();
  const championData: QuoteData[] = shuffle(
    data.flatMap(({ name, icon, quotes }) => {
      return quotes.map(({ quote, url }) => ({ name, icon, quote, url }));
    })
  );

  return {
    props: {
      championData,
    },
  };
}

export default function Home({
  championData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [query, setQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(90);
  const queriedData = useFuzzySearch(
    query,
    ['quote', 'name'],
    championData,
    visibleItems
  );

  return (
    <div>
      <input
        className="text-black sticky"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <InfiniteScroller
        loadMore={() => {
          setVisibleItems((prevVisibleItems) => prevVisibleItems + 50);
        }}
        loader={<p>Loading...</p>}
        rootMargin="200px"
        hasMore={queriedData.length >= visibleItems}
      >
        <List
          items={queriedData.slice(0, visibleItems)}
          keyExtractor={({ name, quote, url }) => name + quote + url}
          className="grid grid-cols-3 gap-4"
          renderItem={({ name, icon, quote, url }, i) => (
            <Quote
              quote={quote}
              champName={name}
              champIcon={icon}
              quoteAudioURL={url}
            />
          )}
        />
      </InfiniteScroller>
    </div>
  );
}

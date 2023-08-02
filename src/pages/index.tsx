import InfiniteScroller from '@/components/InfiniteScroller';
import List from '@/components/List';
import Quote from '@/components/Quote';
import VolumeSlider from '@/components/VolumeSlider';
import { spiegel } from '@/fonts/Spiegel-OTF/Spiegel';
import useFuzzySearch from '@/hooks/useFuzzySearch';
import { VolumeProvider } from '@/hooks/useVolume';
import { shuffle } from '@/utils/arrays';
import getChampionData from '@/utils/getChampionData';
import { InferGetStaticPropsType } from 'next';
import { useRef, useState } from 'react';

type QuoteData = {
  name: string;
  icon: string;
  quote: string;
  url: string;
  skin: string;
};

export async function getStaticProps() {
  const data = await getChampionData();
  const championData: QuoteData[] = shuffle(
    data.flatMap(({ name, icon, quotes, skins }) => {
      return quotes.map(({ quote, url }) => ({
        name,
        icon,
        quote,
        url,
        skin: skins[0].tilePath,
      }));
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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    containerRef.current?.scrollTo({ top: 0, behavior: 'instant' });
    const newVisibleItems = visibleItems === 90 ? visibleItems : 90;
    setVisibleItems(newVisibleItems);
  };

  return (
    <VolumeProvider>
      <section
        ref={containerRef}
        className="flex flex-col gap-4 max-h-screen overflow-y-auto no-scrollbar"
      >
        <div className="flex flex-col sm:flex-row sticky top-0 z-10 px-4 items-center">
          <input
            className={`
            ${spiegel.variable} text-gray-100 bg-gold py-3 rounded-tl-md 
            rounded-bl-md outline-none font-semibold tracking-wider text-center 
            placeholder-gray-300 flex-1
            `}
            type="text"
            value={query}
            placeholder="Search quotes..."
            onChange={handleChange}
          />
          <VolumeSlider />
        </div>
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
            className="grid gap-4 auto-rows-fr sm:grid-cols-2 px-4 xl:grid-cols-3"
            renderItem={({ name, icon, quote, url, skin }, i) => (
              <Quote
                quote={quote}
                champName={name}
                champIcon={icon}
                quoteAudioURL={url}
                skin={skin}
              />
            )}
          />
        </InfiniteScroller>
      </section>
    </VolumeProvider>
  );
}

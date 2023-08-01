import { spiegel } from '@/fonts/Spiegel-OTF/Spiegel';
import { PlayCircle } from 'lucide-react';

type Props = {
  quote: string;
  champName: string;
  champIcon: string;
  quoteAudioURL: string;
  skin: string;
};

function Quote({ quote, champName, quoteAudioURL, skin }: Props) {
  return (
    <div
      className={`bg-slate-900 flex items-center bg-no-repeat bg-cover bg-center p-4 relative h-full rounded-md overflow-hidden z-0`}
      style={{
        backgroundImage: `url(${skin})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="z-10 flex items-center gap-4">
        <PlayCircle
          size={56}
          color="white"
          className="flex-shrink-0 cursor-pointer"
        />

        <div>
          <p
            className={`${spiegel.variable} line-clamp-3 text-xl text- font-spiegel`}
          >
            {quote}
          </p>
          <p
            className={`${spiegel.variable} text-gray-400 font-spiegel font-semibold tracking-wide`}
          >
            {champName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quote;

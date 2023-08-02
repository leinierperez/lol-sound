// import { spiegel } from '@/fonts/Spiegel-OTF/Spiegel';
// import useSound from '@/hooks/useSound';
// import { PauseCircle, PlayCircle } from 'lucide-react';

// type Props = {
//   quote: string;
//   champName: string;
//   champIcon: string;
//   quoteAudioURL: string;
//   skin: string;
// };

// function Quote({ quote, champName, quoteAudioURL, skin }: Props) {
//   const { isPlaying, play, pause } = useSound();
//   return (
//     <div
//       className={`bg-slate-900 flex items-center bg-no-repeat bg-cover bg-center p-4 relative h-full rounded-md overflow-hidden z-0`}
//       style={{
//         backgroundImage: `url(${skin})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60" />

//       <div className="z-10 flex items-center gap-4">
//         {isPlaying ? (
//           <PauseCircle
//             size={56}
//             color="white"
//             className="flex-shrink-0 cursor-pointer"
//             onClick={pause}
//           />
//         ) : (
//           <PlayCircle
//             size={56}
//             color="white"
//             className="flex-shrink-0 cursor-pointer"
//             onClick={() => play(quoteAudioURL)}
//           />
//         )}
//         <div>
//           <p
//             className={`${spiegel.variable} line-clamp-3 text-xl text- font-spiegel`}
//           >
//             {quote}
//           </p>
//           <p
//             className={`${spiegel.variable} text-gray-400 font-spiegel font-semibold tracking-wide`}
//           >
//             {champName}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Quote;

import { spiegel } from '@/fonts/Spiegel-OTF/Spiegel';
import useSound from '@/hooks/useSound';
import { PauseCircle, PlayCircle } from 'lucide-react';
import Image from 'next/image'; // Step 1: Import Image from Next.js

type Props = {
  quote: string;
  champName: string;
  champIcon: string;
  quoteAudioURL: string;
  skin: string;
};

function Quote({ quote, champName, quoteAudioURL, skin }: Props) {
  const { isPlaying, play, pause } = useSound();
  return (
    <div className="relative h-full rounded-md overflow-hidden z-0 flex items-center p-4">
      <Image
        src={skin}
        alt="Champion Skin"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="z-10 flex items-center gap-4">
        {isPlaying ? (
          <PauseCircle
            size={56}
            color="white"
            className="flex-shrink-0 cursor-pointer"
            onClick={pause}
          />
        ) : (
          <PlayCircle
            size={56}
            color="white"
            className="flex-shrink-0 cursor-pointer"
            onClick={() => play(quoteAudioURL)}
          />
        )}
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

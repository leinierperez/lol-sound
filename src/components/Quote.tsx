import Image from 'next/image';

type Props = {
  quote: string;
  champName: string;
  champIcon: string;
  quoteAudioURL: string;
};

function Quote({ quote, champName, champIcon, quoteAudioURL }: Props) {
  return (
    <div>
      <div>
        <Image
          src={champIcon}
          width={100}
          height={100}
          alt={`${champName}'s icon`}
        />
      </div>
      <div>
        <div>{quote}</div>
        <p>{champName}</p>
      </div>
      <audio src={quoteAudioURL} controls />
    </div>
  );
}

export default Quote;

import { spiegel } from '@/fonts/Spiegel-OTF/Spiegel';

type Props = {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function SearchInput({ query, handleChange }: Props) {
  return (
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
  );
}

export default SearchInput;

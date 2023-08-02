import localFont from 'next/font/local';

const myFont = localFont({
  src: '../fonts/BeaufortForLoL-OTF/BeaufortforLOL-Bold.otf',
});

import { spiegel } from '@/fonts/Spiegel-OTF/Spiegel';

const Footer = () => {
  return (
    <footer
      className={`${spiegel.variable} font-spiegel text-gray-100 bg-gold text-center py-4 mt-4`}
    >
      <p>
        {`League Sounds© isn't endorsed by Riot Games and doesn't reflect the views
        or opinions of Riot Games or anyone officially involved in producing or
        managing Riot Games properties. Riot Games, and all associated
        properties are trademarks or registered trademarks of Riot Games, Inc.`}
      </p>
    </footer>
  );
};

export default Footer;

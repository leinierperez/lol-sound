import localFont from 'next/font/local';

const myFont = localFont({
  src: '../fonts/BeaufortForLoL-OTF/BeaufortforLOL-Bold.otf',
});

const Header = () => {
  return (
    <header className="text-center p-6">
      <h1 className={`${myFont.className} text-gold uppercase text-4xl`}>
        League Sounds
      </h1>
    </header>
  );
};

export default Header;

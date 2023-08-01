import localFont from 'next/font/local';

export const spiegel = localFont({
  src: [
    {
      path: '../Spiegel-OTF/Spiegel-Regular.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../Spiegel-OTF/Spiegel-SemiBold.otf',
      weight: '200',
      style: 'semi-bold',
    },
  ],
  variable: '--font-spiegel',
});

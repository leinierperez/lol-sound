export type Champion = {
  name: string;
  quotes: Quote[];
};

type Quote = {
  quote: string;
  url: string;
};

export type MerakiChampion = {
  id: number;
  key: string;
  name: string;
  title: string;
  icon: string;
  skins: Skin[];
};

export type Skin = {
  name: string;
  id: number;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  loadScreenVintagePath: string | null;
};

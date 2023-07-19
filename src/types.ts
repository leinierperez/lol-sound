export type Quote = {
  name: string;
  quotes: QuoteInfo[];
};

type QuoteInfo = {
  quote: string;
  url: string;
};

export type Champion = {
  quotes: QuoteInfo[];
} & MerakiChampion;

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

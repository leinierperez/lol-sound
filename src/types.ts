export type Quote = {
  quote: string;
  url: string;
};

export interface Champion {
  id: number;
  key: string;
  name: string;
  title: string;
  icon: string;
  quotes: Quote[];
  skins: Skin[];
}

export type Skin = {
  name: string;
  id: number;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  loadScreenVintagePath: string | null;
};

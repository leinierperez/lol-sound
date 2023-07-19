import fsPromises from 'fs/promises';
import path from 'path';
import type { Champion, MerakiChampion, Quote } from '../types';

export default async function getChampionData(): Promise<Champion[]> {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const quoteData = JSON.parse(jsonData) as Quote[];
  const merakiChampionData = await getMerakiChampionData();
  const championData = combineChampionData(quoteData, merakiChampionData);
  return championData;
}

function combineChampionData(
  quoteData: Quote[],
  merakiChampionData: MerakiChampion[]
): Champion[] {
  return merakiChampionData.map((merakiChampion, i) => {
    return {
      quotes: quoteData[i].quotes,
      ...merakiChampion,
    };
  });
}

async function getMerakiChampionData(): Promise<MerakiChampion[]> {
  const response = await fetch(
    'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json'
  );
  const merakiData: Record<string, MerakiChampion> = await response.json();
  const merakiChampions: MerakiChampion[] = [];
  for (const champKey of Object.keys(merakiData)) {
    const { id, key, name, title, icon, skins } = merakiData[champKey];
    merakiChampions.push({
      id,
      key,
      name,
      title,
      icon,
      skins,
    });
  }
  return merakiChampions;
}

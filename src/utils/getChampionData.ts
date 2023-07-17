import fsPromises from 'fs/promises';
import path from 'path';
import type { Champion } from '../types';

export default async function getChampionData(): Promise<Champion[]> {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData) as Champion[];
  const lowercasedData = data.map((champion) => {
    return { ...champion, name: champion.name.toLowerCase() };
  });
  return lowercasedData;
}

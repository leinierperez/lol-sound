import getChampionData from '@/utils/getChampionData';
import type { Champion } from '@/types';

export async function getStaticProps(context: any) {
  const data = await getChampionData();
  const championName = context.params.champion;
  const championData = data.find(({ key }) => {
    return key.toLowerCase() === championName;
  });

  return {
    props: {
      championData,
    },
  };
}

export async function getStaticPaths() {
  const data = await getChampionData();
  const paths = data.map(({ key }) => {
    return {
      params: { champion: key.toLowerCase() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Champion({ championData }: { championData: Champion }) {
  return <div>{championData.name}</div>;
}

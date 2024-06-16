import { NextApiRequest, NextApiResponse } from 'next';
import { Heroes } from '@/data/heroes';
import { FilterData, Hero, RarityEnum } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jsonBody = req.body ? JSON.parse(req.body) : {};
  const filter = jsonBody.filter || {};
  const sort = jsonBody.sort || {};
  const { heroClass, rarity, alignment, effect, strongVs }: FilterData = filter;

  console.log(heroClass, rarity, alignment, sort);
  let filteredHeroes = Heroes;
  if (heroClass && heroClass.length > 0) {
    filteredHeroes = filteredHeroes.filter((hero) =>
      heroClass?.includes(hero.heroClass),
    );
  }

  if (alignment && alignment.length > 0) {
    filteredHeroes = filteredHeroes.filter((hero) =>
      alignment?.includes(hero.alignment),
    );
  }

  if (rarity && rarity.length > 0) {
    filteredHeroes = filteredHeroes.filter((hero) =>
      rarity?.includes(hero.rarity),
    );
  }

  if (strongVs && strongVs.length > 0) {
    filteredHeroes = filteredHeroes.filter(
      (hero) => hero.strongVs && strongVs?.includes(hero.strongVs),
    );
  }

  if (effect && effect.length > 0) {
    filteredHeroes = filteredHeroes.filter(
      (hero) =>
        (hero.maxStarEffect && effect?.includes(hero.maxStarEffect)) ||
        (hero.baseEffect && effect?.includes(hero.baseEffect)) ||
        (hero.rageEffect &&
          !Array.isArray(hero.rageEffect) &&
          effect?.includes(hero.rageEffect)) ||
        (hero.rageEffect &&
          Array.isArray(hero.rageEffect) &&
          hero.rageEffect.some((r) => effect.includes(r))),
    );
  }

  if (sort) {
    switch (sort) {
      case 'name_asc':
        filteredHeroes.sort((a, b) => a.name.localeCompare(b.name));
        //  // filteredHeroes.sort((a: Hero, b: Hero) => (a.name > b.name) - (a.name < b.name));
        break;
      case 'name_desc':
        filteredHeroes.sort((a, b) => a.name.localeCompare(b.name));
        filteredHeroes.reverse();
        //  // filteredHeroes.sort((a: Hero, b: Hero) => (a.name > b.name) - (a.name < b.name));
        break;
      case 'rarity_asc':
        filteredHeroes.sort(compareRarity);
        break;
      case 'rarity_asc':
        filteredHeroes.sort(compareRarity);
        filteredHeroes.reverse();
        break;
    }
  }

  res.status(201).json({ message: 'OK', heroes: filteredHeroes, sort: sort });
}

const rarityWeight = {
  [RarityEnum.Common]: 1,
  [RarityEnum.Rare]: 2,
  [RarityEnum.Epic]: 3,
  [RarityEnum.Legendary]: 4,
  [RarityEnum.Unique]: 5,
};

const compareRarity = (a: Hero, b: Hero) => {
  if (rarityWeight[a.rarity] < rarityWeight[b.rarity]) {
    return -1;
  }
  if (rarityWeight[a.rarity] > rarityWeight[b.rarity]) {
    return 1;
  }
  return 0;
};

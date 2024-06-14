import { NextApiRequest, NextApiResponse } from 'next';
import { Heroes } from '@/data/heroes';
import { FilterData } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jsonBody = req.body ? JSON.parse(req.body) : {};
  const { heroClass, rarity, alignment, effect, strongVs }: FilterData =
    jsonBody;

  console.log(heroClass, rarity, alignment);
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
        (hero.baseEffect && effect?.includes(hero.baseEffect)) ||
        (hero.rageEffect && effect?.includes(hero.rageEffect)),
    );
  }

  res.status(201).json({ message: 'OK', heroes: filteredHeroes });
}

import {
  AlignmentEnum,
  EffectEnum,
  Hero,
  HeroClassEnum,
  RaceEnum,
  RarityEnum,
} from '@/types';

export const Heroes: Hero[] = [
  {
    name: 'Carmilla',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Beast,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Logical,
    baseEffect: EffectEnum.Unfocus,
    maxStarEffect: '+50% critical chance vs Beast',
  },
  {
    name: 'Brutus',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Goblin,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Champion,
    baseEffect: EffectEnum.Regenerate,
    rageEffect: EffectEnum.Expose,
    maxStarEffect: 'Chance to Protect with Base Power',
  },
];

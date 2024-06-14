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
    name: 'Aeron',
    heroClass: HeroClassEnum.Hunter,
    strongVs: RaceEnum.Cult,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Dark,
    baseEffect: EffectEnum.Poison,
    rageEffect: EffectEnum.Acid,
    maxStarEffect: 'Rage Power deals 50% more damage vs Poison',
  },
  {
    name: 'Alder',
    heroClass: HeroClassEnum.Mage,
    strongVs: RaceEnum.Militia,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Logical,
    baseEffect: EffectEnum.Unfocus,
    rageEffect: EffectEnum.Acid,
    maxStarEffect: 'Chance to Stun with Base Power',
  },
  {
    name: 'Anaara',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Undead,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Chaotic,
    baseEffect: EffectEnum.Protect,
    rageEffect: EffectEnum.Burn,
    maxStarEffect: 'Rage Power deals 50% more damage vs Expose',
  },
  {
    name: 'Ash',
    heroClass: HeroClassEnum.Hunter,
    strongVs: RaceEnum.Beast,
    rarity: RarityEnum.Common,
    alignment: AlignmentEnum.Valiant,
    baseEffect: EffectEnum.Weaken,
    rageEffect: EffectEnum.Burn,
    maxStarEffect: 'Chance to Unfocus with Base Power',
  },
  {
    name: 'Ayako',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Demon,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Holy,
    baseEffect: EffectEnum.Dispel,
    rageEffect: EffectEnum.Stun,
    maxStarEffect: 'Chance to Weaken with Rage Power',
  },
  {
    name: 'Azhar',
    heroClass: HeroClassEnum.Mage,
    strongVs: RaceEnum.Outlaw,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Holy,
    baseEffect: EffectEnum.Cure,
    rageEffect: EffectEnum.Focus,
    maxStarEffect: 'Chance to give Protect with Base Power',
  },
  {
    name: 'Balendu',
    heroClass: HeroClassEnum.Mage,
    strongVs: RaceEnum.Golem,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Lawful,
    baseEffect: EffectEnum.Regenerate,
    rageEffect: EffectEnum.Burn,
    maxStarEffect: 'This Hero gains +50% critical chance vs Golem enemies',
  },
  {
    name: 'Balberith',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Beast,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Chaotic,
    baseEffect: EffectEnum.Burn,
    rageEffect: EffectEnum.Focus,
    maxStarEffect: '+50% critical chance vs Beast',
  },
  {
    name: 'Bayani',
    heroClass: HeroClassEnum.Rogue,
    strongVs: RaceEnum.Golem,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Valiant,
    baseEffect: EffectEnum.Expose,
    rageEffect: EffectEnum.Dispel,
    maxStarEffect: 'Chance to Freeze with Base Power',
  },
  {
    name: 'Blaine',
    heroClass: HeroClassEnum.Warrior,
    strongVs: RaceEnum.Goblin,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Maniacal,
    baseEffect: EffectEnum.Expose,
    rageEffect: EffectEnum.Expose,
    maxStarEffect: 'This Hero gains +50% critical chance vs Goblin enemies',
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
  {
    name: 'Byrne',
    heroClass: HeroClassEnum.Rogue,
    strongVs: RaceEnum.Goblin,
    rarity: RarityEnum.Epic,
    alignment: AlignmentEnum.Logical,
    baseEffect: EffectEnum.Poison,
    rageEffect: EffectEnum.Poison,
    maxStarEffect: 'Base Power deals 50% more damage vs Weaken',
  },
  {
    name: 'Caliban',
    heroClass: HeroClassEnum.Hunter,
    strongVs: RaceEnum.Militia,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Dark,
    baseEffect: EffectEnum.Weaken,
    maxStarEffect: 'Rage Power deals +50% damage vs Acid',
  },
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
    name: 'Cladis',
    heroClass: HeroClassEnum.Mage,
    strongVs: RaceEnum.Outlaw,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Dark,
    baseEffect: EffectEnum.Dispel,
    rageEffect: EffectEnum.Weaken,
    maxStarEffect: '+50% critical chance vs Outlaw',
  },
  {
    name: 'Delphinia',
    heroClass: HeroClassEnum.Hunter,
    strongVs: RaceEnum.Undead,
    rarity: RarityEnum.Epic,
    alignment: AlignmentEnum.Valiant,
    baseEffect: EffectEnum.Weaken,
    rageEffect: EffectEnum.Delay,
    maxStarEffect: '+50% critical chance vs Undead',
  },
  {
    name: 'Doceo',
    heroClass: HeroClassEnum.Mage,
    strongVs: RaceEnum.Undead,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Dark,
    baseEffect: EffectEnum.Focus,
    rageEffect: EffectEnum.Stun,
    maxStarEffect: 'Chance to Weaken with Rage Power',
  },
  {
    name: 'Doctor Flox',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Golem,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Maniacal,
    baseEffect: EffectEnum.Burn,
    rageEffect: EffectEnum.Expose,
    maxStarEffect: 'Chance to Acid with Rage Power',
  },
  {
    name: 'Don Diego',
    heroClass: HeroClassEnum.Rogue,
    strongVs: RaceEnum.Outlaw,
    rarity: RarityEnum.Epic,
    alignment: AlignmentEnum.Rebel,
    baseEffect: EffectEnum.Dispel,
    rageEffect: EffectEnum.Burn,
    maxStarEffect: '+50% critical chance vs Outlaw',
  },
  {
    name: 'Dvalin',
    heroClass: HeroClassEnum.Warrior,
    strongVs: RaceEnum.Demon,
    rarity: RarityEnum.Epic,
    alignment: AlignmentEnum.Logical,
    baseEffect: EffectEnum.Poison,
    maxStarEffect: '+50% critical chance vs Demon',
  },
  {
    name: 'Eileen',
    heroClass: HeroClassEnum.Rogue,
    strongVs: RaceEnum.Troll,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Maverick,
    baseEffect: EffectEnum.Expose,
    rageEffect: EffectEnum.Expose,
    maxStarEffect: 'Chance to Acid with Base Power',
  },
  {
    name: 'Ericson',
    heroClass: HeroClassEnum.Warrior,
    strongVs: RaceEnum.Goblin,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Valiant,
    rageEffect: EffectEnum.Freeze,
    maxStarEffect: 'Chance to Weaken with Base Power',
  },
  {
    name: 'Erinn',
    heroClass: HeroClassEnum.Warrior,
    strongVs: RaceEnum.Outlaw,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Maverick,
    baseEffect: EffectEnum.Weaken,
    rageEffect: EffectEnum.Expose,
    maxStarEffect: '+30% critical damage on Chain Start attacks',
  },
  {
    name: 'Fahari',
    heroClass: HeroClassEnum.Rogue,
    strongVs: RaceEnum.Cult,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Maverick,
    baseEffect: EffectEnum.Fury,
    rageEffect: EffectEnum.Acid,
    maxStarEffect: 'Chance to Regenerate with Rage Power',
  },
  {
    name: 'Garron',
    heroClass: HeroClassEnum.Warrior,
    strongVs: RaceEnum.Cult,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Lawful,
    baseEffect: EffectEnum.Delay,
    rageEffect: EffectEnum.Acid,
    maxStarEffect: '+50% critical chance vs Cult',
  },
  {
    name: 'Geber',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Cult,
    rarity: RarityEnum.Unique,
    alignment: AlignmentEnum.Rebel,
    baseEffect: EffectEnum.Regenerate,
    rageEffect: EffectEnum.Acid,
    maxStarEffect: 'Chance to Weaken with Base Power',
  },
  {
    name: 'Grax',
    heroClass: HeroClassEnum.Hunter,
    strongVs: RaceEnum.Outlaw,
    rarity: RarityEnum.Epic,
    alignment: AlignmentEnum.Maniacal,
    baseEffect: EffectEnum.Expose,
    rageEffect: EffectEnum.Stun,
    maxStarEffect: 'Chance to Poison with Base Power',
  },
  {
    name: 'Grimm',
    heroClass: HeroClassEnum.Alchemist,
    strongVs: RaceEnum.Goblin,
    rarity: RarityEnum.Epic,
    alignment: AlignmentEnum.Dark,
    baseEffect: EffectEnum.Freeze,
    maxStarEffect: 'Chance to Weaken with Rage Power',
  },
  {
    name: 'Griz',
    heroClass: HeroClassEnum.Hunter,
    strongVs: RaceEnum.Undead,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Lawful,
    baseEffect: EffectEnum.Burn,
    rageEffect: EffectEnum.Expose,
    maxStarEffect: 'Crit chance +30%',
  },
  {
    name: 'Gunn',
    heroClass: HeroClassEnum.Rogue,
    strongVs: RaceEnum.Militia,
    rarity: RarityEnum.Legendary,
    alignment: AlignmentEnum.Chaotic,
    baseEffect: EffectEnum.Acid,
    rageEffect: EffectEnum.Weaken,
    maxStarEffect: 'Increases Acid damage by 100%',
  },
  {
    name: 'Gwen',
    heroClass: HeroClassEnum.Warrior,
    strongVs: RaceEnum.Militia,
    rarity: RarityEnum.Rare,
    alignment: AlignmentEnum.Lawful,
    baseEffect: EffectEnum.Stun,
    rageEffect: EffectEnum.Poison,
    maxStarEffect: 'Chance to Weaken with Rage Power',
  },
];

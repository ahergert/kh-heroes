export const RarityEnum = {
  Common: 'Common',
  Rare: 'Rare',
  Epic: 'Epic',
  Legendary: 'Legendary',
  Unique: 'Unique',
};
export type RarityEnum = (typeof RarityEnum)[keyof typeof RarityEnum];

export const HeroClassEnum = {
  Alchemist: 'Alchemist',
  Hunter: 'Hunter',
  Mage: 'Mage',
  Rogue: 'Rogue',
  Warrior: 'Warrior',
};
export type HeroClassEnum = (typeof HeroClassEnum)[keyof typeof HeroClassEnum];

export const AlignmentEnum = {
  Champion: 'Champion',
  Logical: 'Logical',
};
export type AlignmentEnum = (typeof AlignmentEnum)[keyof typeof AlignmentEnum];

export const RaceEnum = {
  Beast: 'Beast',
  Cult: 'Cult',
  Demon: 'Demon',
  Goblin: 'Goblin',
  Golem: 'Golem',
  Militia: 'Militia',
  Outlaw: 'Outlaw',
  Troll: 'Troll',
  Undead: 'Undead',
};
export type RaceEnum = (typeof RaceEnum)[keyof typeof RaceEnum];

export const EffectEnum = {
  Acid: 'Acid',
  Burn: 'Burn',
  Expose: 'Expose',
  Freeze: 'Freeze',
  Poison: 'Poison',
  Protect: 'Protect',
  Regenerate: 'Regenerate',
  Stun: 'Stun',
  Unfocus: 'Unfocus',
  Weaken: 'Weaken',
};
export type EffectEnum = (typeof EffectEnum)[keyof typeof EffectEnum];

export type Hero = {
  name: string;
  description?: string;
  heroClass: HeroClassEnum;
  rarity: RarityEnum;
  alignment: AlignmentEnum;
  strongVs?: RaceEnum;
  baseVs?: string;
  base?: string;
  baseEffect?: EffectEnum;
  rageVs?: string;
  rage?: string;
  rageEffect?: EffectEnum;
  maxStarEffect: EffectEnum;
  baseCharge?: number;
};

export type FilterData = {
  heroClass?: string[];
  rarity?: string[];
  alignment?: string[];
  strongVs?: string[];
  baseVs?: string[];
  base?: string[];
  rageVs?: string[];
  rage?: string[];
  maxStarEffect?: string[];
};

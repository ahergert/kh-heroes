'use client';
import { Hero } from '@/types';
import Image from 'next/image';
import React from 'react';

export const HeroCard = ({ hero }: { hero: Hero }) => {
  return (
    <figure
      className={`md:flex rounded-xl p-8 md:p-0 bg-${hero.rarity.toLowerCase()} bg-opacity-80`}
    >
      <Image
        className={`w-32 h-32 md:h-auto rounded-xl mx-auto border border-${hero.rarity.toLowerCase()}`}
        src={`/images/hero/${hero.name}.png`}
        alt=""
        width="256"
        height="256"
      />
    </figure>
  );
};

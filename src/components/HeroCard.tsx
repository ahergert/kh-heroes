'use client';
import { EffectEnum, Hero } from '@/types';
import Image from 'next/image';
import React from 'react';

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const renderEffect = (
    effect: string | string[],
    label: string,
  ): JSX.Element => {
    if (typeof effect === 'string') {
      return ![EffectEnum.Dispel, EffectEnum.Delay, EffectEnum.Cure].includes(
        effect,
      ) ? (
        <div className="ms-1 text-sm" key={`${hero.name}-${label}-${effect}`}>
          <span className="me-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {label}
          </span>
          <Image
            className={`w-5 h-auto inline`}
            src={`/images/effect/${effect}.png`}
            alt={effect}
            width="64"
            height="64"
          />
        </div>
      ) : (
        <span key={`${hero.name}-${label}-${effect}`}></span>
      );
    } else {
      return <>{effect.map((e) => renderEffect(e, label))}</>;
    }
  };

  return (
    <figure
      className={`flex rounded-xl p-0 bg-${hero.rarity.toLowerCase()} bg-opacity-80 group relative`}
    >
      <Image
        className={`w-32 h-auto rounded-xl mx-auto border border-${hero.rarity.toLowerCase()}
        opacity-100 group-hover:opacity-0 group-hover:transition group-hover:ease-in-out duration-500`}
        src={`/images/hero/${hero.name}.png`}
        alt=""
        width="256"
        height="256"
      />
      <div
        className={`rounded-xl border border-${hero.rarity.toLowerCase()} bg-white top-0 bottom-0 left-0 right-0 flex-1 flex flex-col py-1 items-start space-y-1 ease-in-out duration-500 transition-all opacity-0 group-hover:opacity-100 absolute`}
      >
        {hero.baseEffect && renderEffect(hero.baseEffect, 'base')}
        {hero.rageEffect && renderEffect(hero.rageEffect, 'rage')}
        {hero.maxStarEffect && renderEffect(hero.maxStarEffect, 'max')}
      </div>
    </figure>
  );
};

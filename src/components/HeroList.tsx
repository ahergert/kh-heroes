import { Hero } from '@/types';
import React from 'react';
import { HeroCard } from './HeroCard';
import { HeroCardPlaceholder } from './HeroCardPlaceholder';

export const HeroList = ({
  heroes,
  isLoading,
}: {
  heroes: Hero[];
  isLoading: boolean;
}) => {
  return (
    <ul
      role="list"
      className="mt-3 grid grid-cols-4 gap-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-8"
    >
      {isLoading ? (
        <>
          <li className="col-span-1 flex">
            <HeroCardPlaceholder />
          </li>
          <li className="col-span-1 flex">
            <HeroCardPlaceholder />
          </li>
          <li className="col-span-1 flex">
            <HeroCardPlaceholder />
          </li>
          <li className="col-span-1 flex">
            <HeroCardPlaceholder />
          </li>
          <li className="col-span-1 flex">
            <HeroCardPlaceholder />
          </li>
        </>
      ) : (
        heroes.map((hero) => (
          <li key={hero.name} className="col-span-1 flex">
            <HeroCard hero={hero} />
          </li>
        ))
      )}
    </ul>
  );
};

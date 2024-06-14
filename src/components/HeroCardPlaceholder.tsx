import React from 'react';

export const HeroCardPlaceholder = () => {
  return (
    <figure
      className={`md:flex bg-slate-100 rounded-xl p-8 md:p-0 border-secondary`}
    >
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-24 w-24"></div>
      </div>
    </figure>
  );
};

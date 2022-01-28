import React from 'react';
import Hero from './Hero.js';

export default function HeroList({ heroes }) {
  return <div className='hero-list'>
    {heroes.map((hero, i) => <Hero key={`${hero}-${i}`} hero={hero}></Hero>)}
  </div>;
}


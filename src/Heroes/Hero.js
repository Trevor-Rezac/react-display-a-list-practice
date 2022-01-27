import React from 'react';

export default function Hero({ hero }) {
  return <div className='hero'>
    <p>{hero.name}&apos;s alter ego is {hero.alterEgo}.</p>
  </div>;
}


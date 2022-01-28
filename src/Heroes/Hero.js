import React from 'react';
import CatchphraseList from './CatchphraseList.js';
import './Heroes.css';

export default function Hero({ hero }) {
//   console.log(hero.catchPhrase);
  return <div className='hero'>
    <p>{hero.name}&apos;s alter ego is {hero.alterEgo}.</p>
    <CatchphraseList catchPhrases={hero.catchPhrase} />
  </div>;
}


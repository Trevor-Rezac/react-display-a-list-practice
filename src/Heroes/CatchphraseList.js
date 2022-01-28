import React from 'react';
import Catchphrase from './Catchphrase';

export default function CatchpraseList({ catchPhrases }) {

  return <div className='catchphrase-list'>
    <p>His Catchphrases are:</p>
    {catchPhrases.map((catchPhrase, i) => <Catchphrase key={`${catchPhrase}-${i}`} catchPhrase={catchPhrase}></Catchphrase>)}
  </div>;
}

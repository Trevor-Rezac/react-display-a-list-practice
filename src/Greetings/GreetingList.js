import React from 'react';
import Greeting from './Greeting.js';

export default function GreetingList({ greetings }) {
  return <div className='greeting-list'>
    {greetings.map((greeting, i) => <Greeting key={`${greeting}-${i}`} greeting={greeting}></Greeting>)}
  </div>;
}


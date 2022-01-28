import React from 'react';
import Dog from './Dog.js';

export default function DogList({ dogs }) {
  return <div className='dog-list'>
    {dogs.map((dog, i) => <Dog key={`${dog}-${i}`} dog={dog}></Dog>)}
  </div>;
}


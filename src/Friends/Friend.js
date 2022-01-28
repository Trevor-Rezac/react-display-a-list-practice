import React from 'react';
import './Friends.css';

export default function Friend({ friend }) {
  
  return <div className='friend'>
    <p className='name'>{friend.name}</p>
    <p className='age'>{friend.age}</p>
    <p className='favorite-color' style={{ backgroundColor: friend.favoriteColor }}>{friend.favoriteColor}</p>
  </div>;
}


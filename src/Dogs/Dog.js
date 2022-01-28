import React from 'react';
import './Dogs.css';

export default function Dog({ dog }) {
  return <div className='dog'>
    <p>My dog, {dog.name}, is {dog.age} years old.</p>
    <p>Their arch nemesis is a {dog.nemesis.type} named {dog.nemesis.name}.</p>
  </div>;
}


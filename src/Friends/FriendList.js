import React from 'react';
import Friend from './Friend.js';
import './Friends.css';

export default function FriendList({ friends }) {
  
  return <div className='friend-list'>
    {friends.map((friend, i) => <Friend key={`${friend}-${i}`} friend={friend}></Friend>)}
  </div>;
}


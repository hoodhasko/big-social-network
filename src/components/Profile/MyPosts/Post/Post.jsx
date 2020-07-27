import React from 'react';
import s from './Post.module.css';

const Profile = () => {
  return (
    <div className={s.item}>
      <img
        src='https://img.icons8.com/officel/40/000000/avatar.png'
        alt='ava'
      />
      Post1
      <div className={s.like}>LIKE</div>
    </div>
  );
};

export default Profile;

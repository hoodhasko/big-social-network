import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src='https://img.icons8.com/officel/40/000000/avatar.png'
        alt='ava'
      />
      {props.message}
      <div className={s.like}>
        <span>{props.countLike}</span> LIKE
      </div>
    </div>
  );
};

export default Post;

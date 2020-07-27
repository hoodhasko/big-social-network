import React from 'react';
import Post from './Post/Post';

const Profile = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message='Hello' countLike='5' />
      <Post message='my first post' countLike='12' />
    </div>
  );
};

export default Profile;

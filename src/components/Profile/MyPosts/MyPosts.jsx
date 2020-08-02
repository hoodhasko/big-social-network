import React from 'react';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hello', countLike: 5},
        {id: 2, message: 'My first post', countLike: 21}
    ]

  return (
    <div>
      <h2>My Posts</h2>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
        { postsData.map( post => <Post message={post.message} countLike={post.countLike} />) }
    </div>
  );
};

export default MyPosts;

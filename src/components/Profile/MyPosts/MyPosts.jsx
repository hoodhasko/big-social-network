import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

    return (
    <div>
      <h2>My Posts</h2>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
        { props.postsData.map( post => <Post message={post.message} countLike={post.countLike} />) }
    </div>
  );
};

export default MyPosts;

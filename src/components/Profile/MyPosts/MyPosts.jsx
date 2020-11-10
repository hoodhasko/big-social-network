import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newTextPost = React.createRef();

  let addPost = () => {
    let text = newTextPost.current.value;
    if (text!== '') {
      props.addPost(text);
      newTextPost.current.value = '';
    }
  }

  return (
    <div>
      <h2>My Posts</h2>
      <div>
        <textarea ref={newTextPost}></textarea>
        <button onClick={ addPost }>Add Post</button>
      </div>
        { props.postsData.map( post => <Post message={post.message} countLike={post.countLike} />) }
    </div>
  );
};

export default MyPosts;

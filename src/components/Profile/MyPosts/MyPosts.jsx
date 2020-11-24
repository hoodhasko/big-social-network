import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

  let text = props.newPostText;

  let addPost = () => {
    if (text !== '') {
      props.addNewPost();
      props.updateNewPostText('');
    }
  }

  let onPostChange = (e) => {
    props.updateNewPostText(e.target.value);
  }

  return (
    <div>
      <h2>My Posts</h2>
      <div>
        <textarea onChange={onPostChange} value={text}/>
        <button onClick={ addPost }>Add Post</button>
      </div>
        { props.posts.map( post => <Post message={post.message} countLike={post.countLike} />) }
    </div>
  );
};

export default MyPosts;

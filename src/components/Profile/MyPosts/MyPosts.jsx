import React from 'react';
import { addPostActionCreater, changeNewPostTextActionCreater } from '../../../redux/state';
import Post from './Post/Post';

const MyPosts = (props) => {

  let text = props.postsData.newPostText;

  let addPost = () => {
    if (text !== '') {
      props.dispatch(addPostActionCreater());
      props.dispatch(changeNewPostTextActionCreater(''));
    }
  }

  let onPostChange = (e) => {
    props.dispatch(changeNewPostTextActionCreater(e.target.value));
  }

  return (
    <div>
      <h2>My Posts</h2>
      <div>
        <textarea onChange={onPostChange} value={text}/>
        <button onClick={ addPost }>Add Post</button>
      </div>
        { props.postsData.posts.map( post => <Post message={post.message} countLike={post.countLike} />) }
    </div>
  );
};

export default MyPosts;

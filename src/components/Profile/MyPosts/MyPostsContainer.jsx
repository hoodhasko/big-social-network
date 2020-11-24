import { connect } from 'react-redux';
import { addPostActionCreater, changeNewPostTextActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

/* const MyPostsContainer = (props) => {
  console.log(props.store.getState());

  let state = props.store.getState();

  let addPost = () => {
      props.store.dispatch(addPostActionCreater());
      props.store.dispatch(changeNewPostTextActionCreater(''));
  }

  let onPostChange = (text) => {
    props.store.dispatch(changeNewPostTextActionCreater(text));
  }

  return (<MyPosts updateNewPostText={onPostChange} addNewPost={addPost} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts}/>);
}; */

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(changeNewPostTextActionCreater(text))
    },
    addNewPost: () => {
      dispatch(addPostActionCreater())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

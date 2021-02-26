import { connect } from 'react-redux';
import { addPostActionCreater, changeNewPostTextActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

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

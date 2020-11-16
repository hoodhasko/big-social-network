const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        countLike: 5454,
      };

      state.posts.push(newPost);
      break;
    case CHANGE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default:
      return state;
  }

  return state;
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const changeNewPostTextActionCreater = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;

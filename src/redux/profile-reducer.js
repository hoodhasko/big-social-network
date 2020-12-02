const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hello', countLike: 153 },
    { id: 2, message: 'My first post', countLike: 21 },
    { id: 3, message: 'Press F', countLike: 9999 },
    { id: 4, message: 'GG WP', countLike: 12 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        countLike: 5454,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };

    case CHANGE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    default:
      return state;
  }
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const changeNewPostTextActionCreater = (text) => ({
  type: CHANGE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;

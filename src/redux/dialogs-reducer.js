const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };

      state.messages.push(newMessage);
      break;
    case CHANGE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }

  return state;
};

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const changeNewMessageTextActionCreater = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;

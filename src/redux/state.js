import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello', countLike: 153 },
        { id: 2, message: 'My first post', countLike: 21 },
        { id: 3, message: 'Press F', countLike: 9999 },
        { id: 4, message: 'GG WP', countLike: 12 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Hasko' },
        { id: 3, name: 'Smd' },
      ],
      messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Hi' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Press F' },
      ],
      newMessageText: '',
    },
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  getState() {
    return this._state;
  },
  _subscriber() {},
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._subscriber(this._state);
  },
};

export default store;

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
    messagesPage: {
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
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      countLike: 5454,
    };

    this._state.profilePage.posts.push(newPost);
    this._subscriber(this._state);
  },
  changeNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._subscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.messagesPage.newMessageText,
    };

    this._state.messagesPage.messages.push(newMessage);
    this._subscriber(this._state);
  },
  changeNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this._subscriber(this._state);
  },
  _subscriber() {},
  subscribe(observer) {
    this._subscriber = observer;
  },
};

export default store;

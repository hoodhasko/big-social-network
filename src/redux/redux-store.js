const { combineReducers, createStore } = require('redux');
const { default: dialogsReducer } = require('./dialogs-reducer');
const { default: profileReducer } = require('./profile-reducer');
const { default: usersReducer } = require('./users-reducer');

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;

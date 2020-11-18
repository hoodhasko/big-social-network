const { combineReducers, createStore } = require('redux');
const { default: dialogsReducer } = require('./dialogs-reducer');
const { default: profileReducer } = require('./profile-reducer');

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

export default store;

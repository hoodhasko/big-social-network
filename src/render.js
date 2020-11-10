import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, changeNewPostText} from './redux/state';

export let rerender = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}


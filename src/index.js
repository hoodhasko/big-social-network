import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, {addPost, changeNewPostText, addMessage, changeNewMessageText, subscribe} from './redux/state';

let rerender = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} changeNewPostText={changeNewPostText} addMessage={addMessage} changeNewMessageText={changeNewMessageText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

rerender(state);

subscribe(rerender);

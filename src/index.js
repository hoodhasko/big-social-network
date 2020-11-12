import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        changeNewMessageText={store.changeNewMessageText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerender(store.getState());

store.subscribe(rerender);

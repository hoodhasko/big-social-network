import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerender(store.getState());

store.subscribe(rerender);

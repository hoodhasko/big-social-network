import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/redux-store';

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerender(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

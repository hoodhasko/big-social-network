import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Hasko'},
    {id: 3, name: 'Smd'}
]

let messagesData = [
    {id: 1, message: 'Hey'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Press F'}
]

let postsData = [
    {id: 1, message: 'Hello', countLike: 5},
    {id: 2, message: 'My first post', countLike: 21},
    {id: 3, message: 'Press F', countLike: 9999}
]
ReactDOM.render(
  <React.StrictMode>
    <App Data={ {dialogsData: dialogsData, messagesData: messagesData, postsData: postsData}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

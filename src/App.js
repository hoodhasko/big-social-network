import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import News from './components/News/News';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper__content'>
          <Route
            path='/profile'
            render={() => <Profile store={props.store} />}
          />
          <Route
            path='/dialogs'
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

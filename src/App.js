import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

import React from 'react';
import { addMessageActionCreater, changeNewMessageTextActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater());
        props.store.dispatch(changeNewMessageTextActionCreater(''));
    }

    let onMessageChange = (text) => {
        props.store.dispatch(changeNewMessageTextActionCreater(text));
    }

    return (<Dialogs sendNewMessage={addMessage} updateNewMessageText={onMessageChange} dialogsData={state.dialogsPage}/>);
};

export default DialogsContainer;

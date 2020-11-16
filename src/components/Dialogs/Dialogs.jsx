import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';
import { addMessageActionCreater, changeNewMessageTextActionCreater } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let newTextMessage = props.dialogsData.newMessageText;

    let addMessage = () => {
        if (newTextMessage !== '') {
            props.dispatch(addMessageActionCreater());
            props.dispatch(changeNewMessageTextActionCreater(''));
        }
    }

    let onMessageChange = (e) => {
        props.dispatch(changeNewMessageTextActionCreater(e.target.value));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogsData.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>) }
            </div>
            <div className={s.messages}>
                { props.dialogsData.messages.map( message => <Message message={message.message}/>) }
            </div>
            <div>
                <textarea onChange={onMessageChange} value={newTextMessage}/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
};

export default Dialogs;

import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import s from './Dialogs.module.css';

const Dialogs = (props) => {
    debugger

    let newMessageText = props.dialogsData.newMessageText;

    let addMessage = () => {
        //if (newMessageText !== '') {
            props.sendNewMessage();
        //}
    }

    let onMessageChange = (e) => {
        props.updateNewMessageText(e.target.value);
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
                <textarea onChange={onMessageChange} value={newMessageText}/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
};

export default Dialogs;

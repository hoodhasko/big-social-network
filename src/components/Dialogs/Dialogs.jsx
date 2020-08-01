import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Hasko'},
        {id: 3, name: 'Smd'}
    ]

    let messagesData = [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>) }
            </div>
            <div className={s.messages}>
                { messagesData.map( message => <Message message={message.message}/>) }
            </div>
        </div>
    );
};

export default Dialogs;

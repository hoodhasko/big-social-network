import {rerender} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', countLike: 153},
            {id: 2, message: 'My first post', countLike: 21},
            {id: 3, message: 'Press F', countLike: 9999},
            {id: 4, message: 'GG WP', countLike: 12}
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Hasko'},
            {id: 3, name: 'Smd'}
        ],
        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Press F'}
        ],
        newMessageText: ''
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        countLike: 5454
    };

    state.profilePage.posts.push(newPost);
    rerender(state);
}

export let changeNewPostText = (newText) => {
    state.profilePage.newPostText = newText;

    rerender(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newMessageText
    }

    state.messagesPage.messages.push(newMessage);
    rerender(state);
}

export let changeNewMessageText = (newText) => {
    state.messagesPage.newMessageText = newText;
    rerender(state);
}

export default state;
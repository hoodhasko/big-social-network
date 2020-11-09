let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', countLike: 153},
            {id: 2, message: 'My first post', countLike: 21},
            {id: 3, message: 'Press F', countLike: 9999},
            {id: 4, message: 'GG WP', countLike: 12}
        ]},
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
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        countLike: 5454
    };

    state.profilePage.posts.push(newPost);
}

export default state;
import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <h1>Profile</h1>
            <MyPosts postsData={props.postsData.posts}
                    newPostText={props.postsData.newPostText}
                    addPost={props.addPost}
                    changeNewPostText={props.changeNewPostText}/>
        </div>
    );
};

export default Profile;

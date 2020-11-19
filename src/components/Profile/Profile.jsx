import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <h1>Profile</h1>
            <MyPostsContainer store={props.store}/>
        </div>
    );
};

export default Profile;

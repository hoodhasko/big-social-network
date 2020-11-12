import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <h1>Profile</h1>
            <MyPosts postsData={props.postsData}
                    dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;

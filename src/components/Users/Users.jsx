import React from 'react';
import axios from 'axios';

import './Users.module.css';

import avatar from '../../assets/images/avatar.png';

class Users extends React.Component {
	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.getUsers(response.data.items);
		});
	}

	render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar"/>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <p>{u.name}</p>
                        <p>{u.status}</p>
                    </div>)
                }
            </div>
        );
    }

}

export default Users;
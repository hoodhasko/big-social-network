import React from 'react';
import axios from 'axios';

import './Users.module.css';

import avatar from '../../assets/images/avatar.png';

let Users = (props) => {

	if (props.users.length === 0 ) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			console.log(response)
			props.getUsers(response.data.items);
		});
	}

	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar"/>
				<div>
					{u.followed ? 
					<button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : 
					<button onClick={() => {props.follow(u.id)}}>Follow</button>}
				</div>
				<p>{u.name}</p>
				<p>{u.status}</p>
				{/*<p>{u.location.country}</pdsds>*/}
				{/*<p>{u.location.city}</p>*/}
			</div>)
		}

	</div>
}

export default Users;
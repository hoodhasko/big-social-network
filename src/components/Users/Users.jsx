import React from 'react';

let Users = (props) => {
	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<img src={u.avatarURL} alt="avatar"/>
				<div>
					{u.followed ? 
					<button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : 
					<button onClick={() => {props.follow(u.id)}}>Follow</button>}
				</div>
				<p>{u.fullName}</p>
				<p>{u.status}</p>
				<p>{u.location.country}</p>
				<p>{u.location.city}</p>
			</div>)
		}

	</div>
}

export default Users;
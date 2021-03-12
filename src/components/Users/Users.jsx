import React from 'react';
import axios from 'axios';

import styles from './Users.module.css';

import avatar from '../../assets/images/avatar.png';

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.getUsers(response.data.items);
			this.props.setTotalUserCount(response.data.totalCount);
		});

	}

    changeCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.getUsers(response.data.items);
        });
    }


	render() {
        /*let setCurrentPage = (page) => {
            this.props.setCurrentPage(page);
        }*/
		let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

		let pages = [];

		for (let i=1; i <= pagesCount; i++) {
			pages.push(i);
		}

        return (
            <div>
				<div>
					{
					    pages.map(p => {
						return <span className={this.props.currentPage === p && styles.selectedPage} onClick={() => this.changeCurrentPage(p)}>{p}</span>
					})}
				</div>
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
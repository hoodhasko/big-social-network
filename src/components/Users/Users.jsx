import React from 'react';

import styles from './Users.module.css';

import avatar from '../../assets/images/avatar.png';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && styles.selectedPage}
                                     onClick={() => props.changeCurrentPage(p)}>{p}</span>
                    })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar"/>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                </div>)
            }
        </div>
    );
}

export default Users;
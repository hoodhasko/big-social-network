import {connect} from 'react-redux';
import {followAC, unfollowAC, getUsersAC, setCurrentPageAC, setTotalUserCountAC} from '../../redux/users-reducer';
import Users from './Users';
import React from "react";
import axios from "axios";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        getUsers: (users) => {
            dispatch(getUsersAC(users));
        },
        setTotalUserCount: (count) => {
            dispatch(setTotalUserCountAC(count));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
    };
};

class UsersContainer extends React.Component {
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
        return <Users
            users={this.props.users}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            changeCurrentPage={this.changeCurrentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

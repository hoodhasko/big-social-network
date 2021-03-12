import { connect } from 'react-redux';
import {followAC, unfollowAC, getUsersAC, setCurrentPageAC, setTotalUserCountAC} from '../../redux/users-reducer';
import Users from './Users';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);

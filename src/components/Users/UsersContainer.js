import { connect } from 'react-redux';
import { followAC, unfollowAC, getUsersAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

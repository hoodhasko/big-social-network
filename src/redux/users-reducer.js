const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const GET_USERS = 'GET-USERS';

let initialState = {
  users: [
    {
      id: 1,
      avatarURL:
        'https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men-300x300.png',
      followed: true,
      fullName: 'Alex',
      status: 'I am a noob :-(',
      location: { country: 'Russia', city: 'Ufa' },
    },
    {
      id: 2,
      avatarURL:
        'https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men-300x300.png',
      followed: false,
      fullName: 'Igor',
      status: 'I am a pro :-(',
      location: { country: 'Russia', city: 'Moscow' },
    },
    {
      id: 3,
      avatarURL:
        'https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men-300x300.png',
      followed: true,
      fullName: 'Oleg',
      status: 'I am a very pro :-(',
      location: { country: 'Russia', city: 'SP' },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const getUsersAC = (users) => ({ type: GET_USERS, users });

export default usersReducer;

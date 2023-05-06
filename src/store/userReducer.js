const defaultState = {
  users: []
};

const GET_USERS = "GET_USERS";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload
});

import { csrfFetch } from "./csrf";

export const SET_SESSION_USER = "session/SET_USER";
export const REMOVE_SESSION_USER = "session/REMOVE_USER";

export const actionSetSessionUser = (user) => {
  return {
    type: SET_SESSION_USER,
    payload: user,
  };
};

export const actionRemoveSessionUser = () => {
  return {
    type: REMOVE_SESSION_USER,
  };
};

export const thunkSetSessionUser = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credential, password }),
  });
  const data = await response.json();
  dispatch(actionSetSessionUser(data.user));
  return response;
};

export const thunkRestoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(actionSetSessionUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, firstName, lastName, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      firstName,
      lastName,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(actionSetSessionUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(actionRemoveSessionUser());
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SESSION_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_SESSION_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;

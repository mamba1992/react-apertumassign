import { loginConstants } from "./../constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.username,
      };
    case loginConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.username,
      };
    case loginConstants.LOGIN_FAILURE:
      return { ...state, error: action.payload, loggingIn: false };
    default:
      return state;
  }
}

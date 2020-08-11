import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginReducer";
import usersReducer from "./usersReducer";
import { loginConstants } from "./../constants";

const appReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
});
const initialState = {};
const rootReducer = (state = initialState, action) => {
  if (action.type === loginConstants.LOGOUT) {
    storage.removeItem("persist:root");
    state = initialState;
  }
  return appReducer(state, action);
};
export default rootReducer;

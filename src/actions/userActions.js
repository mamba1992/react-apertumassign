import { loginConstants } from "./../constants/loginConstants";
export const filterUsers = (users) => (dispatch) => {
  dispatch({
    type: loginConstants.FILTER_USERS,
    users,
  });
};

export const resetFilter = (users) => (dispatch) => {
  dispatch({
    type: loginConstants.RESET_FILTER,
    users,
  });
};

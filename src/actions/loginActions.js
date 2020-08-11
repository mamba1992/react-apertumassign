import baseApi from "../apis/baseApi";
import authHeader from "./../apis/authHeader";
import { loginConstants } from "./../constants";

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const formData = {
      accountId: username,
      pswd: password,
    };
    dispatch({
      type: loginConstants.LOGIN_REQUEST,
      username,
    });
    const response = await baseApi.post("/user/login", formData);
    dispatch({
      type: loginConstants.LOGIN_SUCCESS,
      username,
    });
    const user = {
      accountId: formData.accountId,
      authToken: response.data.token,
    };
    localStorage.setItem("user", JSON.stringify(user));
    await dispatch(fetchUsers());
  } catch (e) {
    dispatch({
      type: loginConstants.LOGIN_FAILURE,
      payload: "Invalid Username or password",
    });
  }
};

export const fetchUsers = () => async (dispatch) => {
  const headerOptions = {
    headers: authHeader(),
  };
  const response = await baseApi.get("/users", headerOptions);
  dispatch({
    type: loginConstants.GETALL_SUCCESS,
    users: response.data,
  });
};

export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: loginConstants.LOGOUT,
  });
  history.push("/login");
};

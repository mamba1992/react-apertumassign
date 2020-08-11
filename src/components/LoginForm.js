import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginActions";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoginForm = (props) => {
  const { userLogin, loggingIn } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userLogin(username, password);
    history.push("/");
  };
  const errorMessage = () => {
    if (props.errorMessage) {
      return <div className="info-red">{props.errorMessage}</div>;
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-group">
          <label className="form-label">User Name</label>
          <input
            name="username"
            value={username}
            placeholder="User Name"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            placeholder="Password"
            value={password}
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">
            Login
          </button>
          {loggingIn && (
            <img
              alt="loader"
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            />
          )}
        </div>
      </form>

      {errorMessage()}
    </div>
  );
};

const mapStateToProps = (state) => {
  const errorMessage = state.login.error;
  const { loggingIn } = state.login;
  return {
    errorMessage,
    loggingIn,
  };
};
const mapDispatchToProps = (dispatch) => ({
  userLogin: (username, password) => dispatch(loginUser(username, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

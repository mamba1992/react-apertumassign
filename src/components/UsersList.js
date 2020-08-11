import React from "react";
import { get } from "lodash";
import { connect } from "react-redux";
// import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { filterUsers, resetFilter } from "../actions/userActions";
import { logoutUser } from "../actions/loginActions";
import "./UserList.css";

import User from "./User";
const UsersList = ({
  filteredUsers,
  users,
  onClickSetFilter,
  onClickResetFilter,
  onClickLogout,
}) => {
  const history = useHistory();
  const updatedUsers = filteredUsers ? filteredUsers : users;
  const mappedUsers = updatedUsers.map((user) => {
    return <User key={user.accountId} userData={user} />;
  });

  return (
    <>
      <div className="btn-wrapper">
        <button
          type="button"
          className="btn set-filter-btn"
          onClick={() => onClickSetFilter(users)}
        >
          Set Filter
        </button>
        <button
          type="button"
          className="btn reset-filter-btn"
          onClick={() => onClickResetFilter(users)}
        >
          Reset Filter
        </button>
        <button
          type="button"
          className="btn logout-btn"
          onClick={() => onClickLogout(history)}
        >
          Logout
        </button>
      </div>
      <div className="user-list">{mappedUsers}</div>
    </>
  );
};
const mapStateToProps = (state) => {
  const users = get(state, "users.users");
  const filteredUsers = get(state, "users.filteredUsers");
  return {
    users,
    filteredUsers,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClickSetFilter: (users) => dispatch(filterUsers(users)),
  onClickResetFilter: (users) => dispatch(resetFilter(users)),
  onClickLogout: (history) => dispatch(logoutUser(history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

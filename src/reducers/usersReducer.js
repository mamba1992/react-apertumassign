import { loginConstants } from "./../constants";
import { filterUsers } from "../helpers/filterUsers";

export default function users(state = {}, action) {
  const { users } = action;
  switch (action.type) {
    case loginConstants.GETALL_SUCCESS:
      return {
        users,
      };
    case loginConstants.FILTER_USERS:
      const filteredUsers = filterUsers(users);
      return {
        ...state,
        filteredUsers,
      };
    case loginConstants.RESET_FILTER:
      return {
        users,
      };
    default:
      return state;
  }
}

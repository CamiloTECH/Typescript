import { User, FetchUsersAction } from "./actions";
import { ActionTypes } from "./types";

export const userReducer = (state: User[] = [], action: FetchUsersAction) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;

    default:
      return state;
  }
};

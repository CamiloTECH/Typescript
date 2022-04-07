import { ActionTypes } from "./types";
import { Dispatch } from "redux";
import axios from "axios";
const url = "http://localhost:3001/api/user";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction{
  type:ActionTypes.fetchUsers,
  payload:User[]
}

export const fetchUser = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};

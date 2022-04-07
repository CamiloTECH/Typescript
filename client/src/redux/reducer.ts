import { combineReducers } from "redux";
import { User } from "./actions";
import { userReducer } from "./users";

export interface StoreState{
  users:User[]
}

const rootReducer = combineReducers<StoreState>({
  users:userReducer
});

export default rootReducer;

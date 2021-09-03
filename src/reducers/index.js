import { combineReducers } from "redux";
import creditReducer from "./credit";
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  credit: creditReducer,
});

export default rootReducer;
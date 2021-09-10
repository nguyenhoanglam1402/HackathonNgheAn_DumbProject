import { combineReducers } from "redux";
import creditReducer from "./credit";
import userReducer from "./user";
import categoryReducer from "./category";

const rootReducer = combineReducers({
  user: userReducer,
  credit: creditReducer,
  category: categoryReducer,
});

export default rootReducer;
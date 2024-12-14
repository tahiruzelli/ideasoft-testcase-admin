import { combineReducers } from "redux";
import product from "./product/reducer";
import category from "./category/reducer";

export default combineReducers({
  product,
  category,
});

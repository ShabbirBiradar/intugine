import { combineReducers } from "redux";
import auth from "./auth";
import devices from "./reducer";

export default combineReducers({
  auth,
  devices,
});

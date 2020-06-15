import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootRedducer from "./reducers/combineReducer";

export default function configureStore() {
  return createStore(rootRedducer, applyMiddleware(thunk));
}

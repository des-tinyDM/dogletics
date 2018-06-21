import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./userReducer";
import inventoryReducer from "./inventoryReducer";
import cartReducer from "./cartReducer";

const store = createStore(
  combineReducers({
    userReducer,
    inventoryReducer,
    cartReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;

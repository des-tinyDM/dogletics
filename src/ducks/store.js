import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./userReducer";
import inventoryReducer from "./inventoryReducer";
import cartReducer from "./cartReducer";
import miscReducer from "./miscReducer";

const store = createStore(
  combineReducers({
    userReducer,
    inventoryReducer,
    cartReducer,
    miscReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;

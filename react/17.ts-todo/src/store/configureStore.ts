import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import todos from "../todos/todos.duck";

const rootReducer = combineReducers({ todos });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

import { thunk } from "redux-thunk";
import formReducer from "./formReducer";
import { applyMiddleware, combineReducers,createStore } from "redux";
const rootReducer=combineReducers({
  form:formReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk))
export default store;
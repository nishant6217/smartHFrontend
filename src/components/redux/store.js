import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import {
  getGroupedData,
  getTotalAndAvg,
} from "./reducers/smartHReducers";

const reducer = combineReducers({
  getGroupedData: getGroupedData,
  getTotalAndAvg: getTotalAndAvg,
});


const middleware = [thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;

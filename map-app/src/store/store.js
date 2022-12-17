import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import logger from "./middleware/logger";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;
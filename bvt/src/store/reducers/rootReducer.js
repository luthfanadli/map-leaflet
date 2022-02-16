import { combineReducers } from "redux";
import pointReducer from "./pointReducer";

const rootReducer = combineReducers({
    pointReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import users from "./users-reducer";
import auth from "./auth-reducer";

const reducers = combineReducers({
    auth,
    users,
});

export default reducers;

import { combineReducers } from "redux";

//reducers
import characters from "./characters";

const root = combineReducers({
  characters: characters
});

export default root;

import { combineReducers } from "redux";

//reducers
import characters from "./characters";
import singleCharacter from "./singleCharacter";

const root = combineReducers({
  characters: characters,
  singleCharacter: singleCharacter
});

export default root;

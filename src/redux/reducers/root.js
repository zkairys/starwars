import { combineReducers } from "redux";

//reducers
import characters from "./characters";
import singleCharacter from "./singleCharacter";
import favourites from "./favourites";

const root = combineReducers({
  characters: characters,
  singleCharacter: singleCharacter,
  favourites: favourites
});

export default root;

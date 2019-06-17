import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { INIT_CHARACTERS } from "../types/";
import * as actions from "../actions";

function* fetchInitialData() {
  const request = yield axios.get("https://swapi.co/api/people/");
  yield put(actions.setCharacters(request.data));
}

function* StarWars() {
  yield takeLatest(INIT_CHARACTERS, fetchInitialData);
}

export default StarWars;

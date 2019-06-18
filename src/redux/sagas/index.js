import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { INIT_CHARACTERS } from "../types/";
import * as actions from "../actions";

function* fetchPeopleData(payload) {
  const request = yield axios.get(
    `https://swapi.co/api/people/?page=${payload.payload}`
  );
  yield put(actions.setCharacters(request.data));
}

function* StarWars() {
  yield takeLatest(INIT_CHARACTERS, fetchPeopleData);
}

export default StarWars;

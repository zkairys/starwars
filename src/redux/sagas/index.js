import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { INIT_CHARACTERS, INIT_SINGLE_CHARACTER } from "../types/";
import * as actions from "../actions";

function* fetchCharacterData(payload) {
  const request = yield axios.get(
    `https://swapi.co/api/people/?page=${payload.payload}`
  );
  yield put(actions.setCharacters(request.data));
}

function* fetchSingleCharacterData(payload) {
  const request = yield axios.get(
    `https://swapi.co/api/people/?search=${payload.payload}`
  );

  console.log(request.data);
  yield put(actions.setSingleCharacter(request.data));
}

function* StarWars() {
  yield takeLatest(INIT_CHARACTERS, fetchCharacterData);
  yield takeLatest(INIT_SINGLE_CHARACTER, fetchSingleCharacterData);
}

export default StarWars;

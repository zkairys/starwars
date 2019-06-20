import rootReducer from "./redux/reducers/root";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import StarWars from "./redux/sagas/";
import { save, load } from "redux-localstorage-simple";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     save(),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const createStoreWithMiddleware = applyMiddleware(
  save({ states: ["favourites.favourites"] })
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  load({ states: ["favourites.favourites"] }),
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(StarWars);

export default store;

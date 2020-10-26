import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

//aqui van los reducers
import { problema2Reducer, problema3Reducer } from './reducers';


//fin reducers

import sagas from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    problema2Reducer,
    problema3Reducer,
  }),
  applyMiddleware(sagaMiddleware),
);
export default store;
sagaMiddleware.run(sagas);
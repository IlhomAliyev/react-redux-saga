import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';
import { countWatcher } from '../saga/countSaga';
import { userWatcher } from '../saga/userSaga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher)
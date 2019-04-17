import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import todoSags from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
// mount it on the Store
const store = createStore(
  reducer,
  enhancer,
);

// then run the saga
sagaMiddleware.run(todoSags)

export default store;

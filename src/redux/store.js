

import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootSaga } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

 const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;


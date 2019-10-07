import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

const middlewares = [];

//redux devtools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export { store };

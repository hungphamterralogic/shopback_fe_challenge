import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

// eslint-disable-next-line no-underscore-dangle
const devToolsCompose = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devToolsCompose || compose;

export default function configureStore(initialState = {}, extraMiddlewares = []) {
  const enhancer = composeEnhancers(applyMiddleware(...extraMiddlewares));
  return createStore(rootReducer, initialState, enhancer);
}

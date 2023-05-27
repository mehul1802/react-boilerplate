import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import combineReducer from "./reducer";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: combineReducer,
    middleware: defaultMiddleware => [...defaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  });

  return store;
}

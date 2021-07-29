// DEPENDENCIES
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";

// REDUCERS
import movieReducer from "./reducers/movieReducer";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";

export default function configureStore(initialState: any, browserHistory: any) {
  const middlewares = [
    thunk,
    routerMiddleware(browserHistory),
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootReducer = combineReducers({
    movieReducer,
    authReducer,
    alertReducer,
    routing: routerReducer,
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );
}

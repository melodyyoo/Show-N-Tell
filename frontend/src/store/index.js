import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import showsReducer from "./shows"
import reviewsReducer from "./reviews";
import userReducer from "./user";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  shows: showsReducer,
  reviews: reviewsReducer,
  user: userReducer,
  comments: commentsReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

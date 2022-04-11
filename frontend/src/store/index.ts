import { createStore, applyMiddleware, Store, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<MediaState, SearchAction> & {
  dispatch: DispatchType;
} = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export const { dispatch } = store;

export default store;
import * as React from "react";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './App';
import reducer from "./store/reducer";
import reportWebVitals from './reportWebVitals';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<MediaState, SearchAction> & {
  dispatch: DispatchType;
} = createStore(
  reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

export const {dispatch} = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

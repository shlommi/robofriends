import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import "./index.css";
import App from "./containers/App";
import "tachyons";
import registerServiceWorker from "./registerServiceWorker";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store =
  createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById("root"));
registerServiceWorker();

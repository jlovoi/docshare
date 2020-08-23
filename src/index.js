import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./features/app";
import * as serviceWorker from "./serviceWorker";
import reducers from "./web-core/reducers";
import sagas from "./web-core/sagas";
import init from "./initialize";
import "./index.css";

const prod = Boolean(
  (process.env.REACT_APP_API || process.env.NODE_ENV) === "production"
);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  prod
    ? applyMiddleware(sagaMiddleware)
    : composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagas.map(saga => sagaMiddleware.run(saga));
sagaMiddleware.run(init);

store.dispatch({ type: "INIT" });

export const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

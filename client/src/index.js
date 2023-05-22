import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducers from "./reducers";

// Creates a store with reducers & applies middleware to it
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

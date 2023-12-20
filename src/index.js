import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { userReducer } from "./redux/reducer/reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { spinnerReducer } from "./redux/reducer/spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducer = combineReducers({
  userReducer,
  spinnerReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();

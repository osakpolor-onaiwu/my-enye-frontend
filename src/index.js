import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import App from "./App";
import "./app.css";
import Reducer from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(Reducer, applyMiddleware(thunk.withExtraArgument()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

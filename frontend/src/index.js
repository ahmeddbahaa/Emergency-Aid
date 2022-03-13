import React from "react";
import ReactDOM from "react-dom";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./store/reducers";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.css";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

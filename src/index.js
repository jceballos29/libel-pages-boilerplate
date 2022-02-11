import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Video from "./components/modals/Video";
import AdvisoryGlobal from "./components/modals/AdvisoryGlobal";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/video";
import awardReducer from "./features/award";
import trainingReducer from "./features/training";
import Award from "./components/modals/Award";
import Training from "./components/modals/Training";
import advisoryReducer from "./features/advisory";
import sideMenuReducer from "./features/menu";

const store = configureStore({
    reducer: {
        video: videoReducer,
        award: awardReducer,
        training: trainingReducer,
        advisory: advisoryReducer,
        sideMenu: sideMenuReducer,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <Video />
            <Award />
            <Training />
            <AdvisoryGlobal />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

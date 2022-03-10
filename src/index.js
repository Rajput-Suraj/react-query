import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SuperHeoresPage from "./components/SuperHeores.page";
import RQSuperHeoresPage from "./components/RQSuperHeores.page";
import HomePage from "./components/Home.page";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/super-heroes" element={<SuperHeoresPage />} />
                <Route
                    path="/rq-super-heroes"
                    element={<RQSuperHeoresPage />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

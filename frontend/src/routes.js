import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import CallConference from "./components/call-conference";

import Error from "./components/error";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/call" element={<CallConference />} />

            <Route path="/error" element={<Error />} />

            <Route path="" element={<Error />} />
            <Route path="*" element={<Error />} />
            <Route element={<Error />} />
        </Routes>
    );
};

export default routes;

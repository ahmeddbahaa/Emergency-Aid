import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";

import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Error from "./components/error";
import PageNotFound from "./components/global/page-not-found";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/error" element={<Error />} />

            <Route path="" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
            <Route element={<PageNotFound />} />
        </Routes>
    );
};

export default routes;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../src/pages/Home";

const AppRoutes = () => (
    <Routes>
        {/* <Route excat path="/peliculas"/> */}
        <Route path="/" element={Home}/>
    </Routes>
);

export default AppRoutes;
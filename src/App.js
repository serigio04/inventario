import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UsuariosTable from "./pages/Usuarios";


const App = () => {
  return(
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UsuariosTable/>} /> 
      </Routes>
    </BrowserRouter>
  )
};

export default App;
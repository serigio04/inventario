import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UsuariosTable from "./pages/Usuarios";
import Productos from "./pages/Productos"
import { RegistrarForm } from "./pages/Sesion";
import LoginForm from "./pages/Sesion/login";
import RutaPrivada from "./pages/Sesion/rutaPrivada";


const App = () => {
  return(
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={
          <RutaPrivada>
            <Home />
          </RutaPrivada>} />
        <Route path="/usuarios" element={
          <RutaPrivada>
            <UsuariosTable/>
          </RutaPrivada>} /> 
        <Route path="/productos" element={
          <RutaPrivada>
            <Productos />
          </RutaPrivada>} />
        <Route path="/registrar" element={<RegistrarForm />}/>
        <Route path="/login" element={<LoginForm />}/>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
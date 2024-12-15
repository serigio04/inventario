import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./Routes";


const App = () => {
  return(
    <BrowserRouter >
      <Header />
      <AppRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  )
};

export default App;
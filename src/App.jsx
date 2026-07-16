import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";

import React from "react";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/produtos" element={<Produtos />} /> */}
        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

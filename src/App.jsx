import { Routes, Route } from "react-router-dom";
import ListaProduto from "./pages/ListaProduto";
import Produto from "./pages/Produto";
import Home from "./pages/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/ListaProduto" element={<ListaProduto />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;

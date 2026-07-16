import { Routes, Route } from "react-router-dom";
import ListaProduto from "./pages/ListaProduto";
import Produto from "./pages/Produto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaProduto />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="p-5 bg-cyan-950 text-gray-200 flex justify-center ">
        <h1 className="text-2xl font-bold">Projeto BASE</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
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

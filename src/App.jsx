import { Routes, Route } from "react-router-dom";
import ListaProduto from "./pages/ListaProduto";
import Produto from "./pages/Produto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaProduto />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
  );
}

export default App;

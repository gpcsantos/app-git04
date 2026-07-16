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
    </>
  );
}

export default App;

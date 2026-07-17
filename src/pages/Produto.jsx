import { Link } from "react-router-dom";

function Produto() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col">
      <div className="w-100 bg-purple-300 border-2 border-purple-800 text-center p-10 rounded-2xl">
        <h1>Produto 1</h1>
        <p>Descrição do produto 1...</p>
        <p className="pb-2">R$ 10,00</p>
        <Link to="/" className="p-2 text-white bg-purple-950 rounded-2xl">
          Voltar para a lista
        </Link>
      </div>
    </div>
  );
}

export default Produto;

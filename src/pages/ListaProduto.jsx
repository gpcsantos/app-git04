import { Link } from "react-router-dom";

export default function ListaProduto() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col pt-20 gap-10  ">
      <h1 className="text-4xl font-bold ">Lista de Produtos</h1>
      <div className="flex ">
        <Link to="/produto">
          <div className="border-2 border-[#ccc] p-10 m-10">
            <h3>Produto 1</h3>
            <p>R$ 10,00</p>
          </div>
        </Link>

        <Link to="/produto">
          <div className="border-2 border-[#ccc] p-10 m-10">
            <h3>Produto 1</h3>
            <p>R$ 10,00</p>
          </div>
        </Link>

        <Link to="/produto">
          <div className="border-2 border-[#ccc] p-10 m-10">
            <h3>Produto 1</h3>
            <p>R$ 10,00</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

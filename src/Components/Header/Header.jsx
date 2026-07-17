import React from "react";
import Home from "../../pages/Home";
import ListaProduto from "../../pages/ListaProduto";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="bg-amber-600 mx-auto p-5 font-bold">
          <div className="flex justify-around items-center ">
            <div className=""> Logo</div>
            <div className="gap-10 flex flex-row">
              <Link to="/" className="flex">
                Home
              </Link>
              <Link to="/ListaProduto" className="flex">
                Produtos
              </Link>
            </div>
            <div className=""> Foto de perfil</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

// <Link
//   to="/login"
//   className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:scale-105 transition-transform inline-block"
// >
//   Entrar no Clube
// </Link>

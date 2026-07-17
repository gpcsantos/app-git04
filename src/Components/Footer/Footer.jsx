import React from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import ListaProduto from "../../pages/ListaProduto";

function Footer() {
  return (
    <>
      <footer className="mt-20">
        <div className="bg-amber-600 mx-auto p-5 font-bold ">
          <div className="flex justify-around items-center ">
            <div className=""> Logo</div>
            <div className="gap-10 flex flex-row">
              <div className="flex flex-col gap-6 items-center">
                <Link to="/" className="flex">
                  Home
                </Link>
                <Link to="/ListaProduto" className="flex">
                  Produtos
                </Link>
              </div>
            </div>
            <div className=""> Mais Informações sla cara</div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

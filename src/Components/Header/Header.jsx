import React from "react";

function Header() {
  return (
    <>
      <header>
        <div className="bg-amber-600 mx-auto p-5 font-bold">
          <div className="flex justify-around items-center ">
            <div className=""> Logo</div>
            <div className="gap-10 flex flex-row">
              <a href="" className="flex">
                Home
              </a>{" "}
              <a href="" className="flex">
                Produtos
              </a>
            </div>
            <div className=""> Foto de perfil</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-20">
        <div className="bg-amber-600 mx-auto p-5 font-bold ">
          <div className="flex justify-around items-center ">
            <div className=""> Logo</div>
            <div className="gap-10 flex flex-row">
              <div className="flex flex-col gap-6 items-center">
                <a href="" className="flex">
                  Home
                </a>
                <a href="" className="flex">
                  Produtos
                </a>
              </div>

              <div className="flex flex-col gap-6 items-center text-center">
                <a href="" className="flex">
                  Home
                </a>
                <a href="" className="flex">
                  Produtos
                </a>
              </div>
              <div className="flex flex-col gap-6 items-center text-center">
                <a href="" className="flex">
                  Home
                </a>
                <a href="" className="flex">
                  Produtos
                </a>
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

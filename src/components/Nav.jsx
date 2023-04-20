import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-xl relative select-none bg-grey lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch h-12">
        <img
          src="assets/logo.svg"
          alt="Hergo Logo"
          className="h-16 w-16 px-1 -mt-2 ml-4"
        />
        <button
          className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              className="fill-current text-black mb-1"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="fill-current text-black mb-1"
            />
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow transition duration-300 ease-in-out`}
      >
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto gap-4">
          <a
            href="#"
            className="cursor-pointer text-base flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark ml-4 hover:bg-grey-dark hover:hover:text-blue-500"
          >
            Inicio
          </a>
          <a
            href="#"
            className="cursor-pointer text-base flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark ml-4 hover:bg-grey-dark hover:hover:text-blue-500"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="cursor-pointer text-base flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark ml-4 hover:bg-grey-dark hover:hover:text-blue-500"
          >
            Productos
          </a>
          <a
            href="#"
            className="cursor-pointer text-base flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark ml-4 hover:bg-grey-dark hover:hover:text-blue-500"
          >
            Contacto
          </a>
          <button
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
            aria-expanded="false"
            type="button"
          >
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="text-black hover:text-blue-500"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

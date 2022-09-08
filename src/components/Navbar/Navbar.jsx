/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "@headlessui/react";
import logo from "../../assets/images/logo-maison.png";
import { useAtom } from "jotai";
import { loggedAtom } from "../../services/Atoms/user";
import APIManager from "../../services/api";

export default function Example() {
  const [logged, setLogged] = useAtom(loggedAtom);
  const logout = async (e) => {
    e.preventDefault();
    await APIManager.logoutUser();
    setLogged(false);
  };

  return (
    <Popover className="fixed w-full z-10 top-0 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div>
            <p>ImmoCoin</p>
          </div>
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              to="/"
            >
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="logo-maison"
              />
            </NavLink>
          </div>
          <NavLink
            className="text-base font-medium text-gray-500 hover:text-gray-900"
            to="/"
          >
            Accueil
          </NavLink>
          {logged ? (
            <>
            <NavLink className="hidden items-center justify-end md:flex md:flex-1 lg:w-0" to="/profile">
              <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Mon profil</p>
            </NavLink>
            <button onClick={logout} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
              Déconnexion
             </button>
            </>
          ) : (
            <>
            <NavLink className="hidden items-center justify-end md:flex md:flex-1 lg:w-0" to="/login">
              <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Connexion</p>
            </NavLink>
            <NavLink className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-purple px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              to="/signup">
              S'inscrire
             </NavLink>
          </>
          )}   
        </div>
      </div>
    </Popover>
  );
}

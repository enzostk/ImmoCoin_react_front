import React, { useState } from "react";
import { loggedAtom } from "../../services/Atoms/user";
import { useAtom, useSetAtom } from "jotai";
import { currentUserAtom } from "../../services/Atoms/currentUser";
import { useNavigate } from "react-router-dom"
import APIManager from "../../services/api";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCurrentUser] = useAtom(currentUserAtom);
  const logged = useSetAtom(loggedAtom);
  const navigate = useNavigate();
  const [status,setStatus]=useState();

  // const update = () => {
  //   let select = document.getElementById('michel');
  //   let value = select.options[select.selectedIndex].value;
  //   console.log(value);
  //   if (value==="User") { 
  //     setStatus("1")
  //    } else { 
  //     setStatus("0")
  //   }
  //   console.log(status);
  //   return status;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await APIManager.registerUser(email, password, status);
    logged(true);
    setCurrentUser(response.user);
    navigate("/");
    console.log("Vous etes enregistres en tant que" + status);
  };

  return (
    <div className="bg-purple min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">S'inscrire</h1>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

        <section>
          <h3 className="font-bold text-2xl">Bienvenue chez ImmoCoin</h3>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleSubmit} >
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
              <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-200 rounded w-full text-gray-700
              focus:outline-none border-b-4 border-purple focus:border-red transition duration-500
              px-3 pb-3"/>
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Mot de passe</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 rounded w-full text-gray-700
              focus:outline-none border-b-4 border-purple focus:border-red transition duration-500
              px-3 pb-3"/>
            </div>
            {/* <select id="michel" onChange={update}>
              <option value="User">User</option>
              <option value="Seller">Seller</option>
            </select> */}
            {/* <label>User</label>
            <input className="checkbox" type="checkbox" value="0" name="User"/>
            <label>Seller</label>
            <input className="checkbox" type="checkbox" value="1" name="Seller"/> */}
            <button className="bg-purple hover:bg-red
            text-white py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Je m'inscris</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signup;

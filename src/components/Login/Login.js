import React, { useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { loggedAtom } from "../../services/Atoms/user";
import { currentUserAtom } from "../../services/Atoms/currentUser";
import APIManager from "../../services/api";
import { NavLink, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const logged = useSetAtom(loggedAtom);
  const [goToHome,setGoToHome] = useState(false)

  if (goToHome) {
    return <Navigate to ="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await APIManager.loginUser(email, password);
    logged(true);
    setCurrentUser(response.user);
  };

  return (
    <div className="bg-purple min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Se connecter</h1>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

        <section>
          <h3 className="font-bold text-2xl">Welcome to Startup</h3>
          <p className="text-gray-600 pt-2">Sign in to your accout</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" method="POST" onSubmit={handleSubmit} action="#">
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
            <div className="flex justify-end">
              <NavLink to="/users/password" className="text-sm text-purple hover:text-red hover:underline mb-6">Mot de passe oublié?</NavLink>
            </div>
            <button onClick={() => {setGoToHome(true)}}className="bg-purple hover:bg-red
            text-white py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Se connecter</button>
          </form>
        </section>
        
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
       <NavLink to="/signup" className="font-bold hover:underline">Inscrivez-vous ici!</NavLink>
      </div>

    </div>
    // <div>
    //         <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       id="email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       id="password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button type="submit">Submit</button>
    //     <Link to="/users/password">MDP</Link>
    //   </form> 
    // </div>
  );
};

export default Login;
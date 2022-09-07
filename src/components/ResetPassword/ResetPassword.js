import React from "react";
import { useParams } from "react-router-dom";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
  const userToken = useParams().token;
  console.log(userToken);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPassword = e.target.newPassword.value;
    const passwordConfirmation = e.target.passwordConfirmation.value;
    if (newPassword === passwordConfirmation) {
      await APIManager.resetPasswordUser(userToken,newPassword)
      .catch((error) => {
        alert("erreur");
        console.log(error.message);
      });
      navigate("/")
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };

  return (
    <div className="bg-purple min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Choisissez un nouveau mot de passe</h1>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleSubmit} >
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Email</label>
              <input type="password" id="newPassword" className="bg-gray-200 rounded w-full text-gray-700
            focus:outline-none border-b-4 border-purple focus:border-red transition duration-500
            px-3 pb-3"/>
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Mot de passe</label>
              <input type="password" id="passwordConfirmation" className="bg-gray-200 rounded w-full text-gray-700
              focus:outline-none border-b-4 border-purple focus:border-red transition duration-500 px-3 pb-3"/>
            </div>
            <button className="bg-purple hover:bg-red
          text-white py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Changer mon mot de passe</button>
          </form>
        </section>
      </main>
    </div>
  );
};
export default ResetPassword;
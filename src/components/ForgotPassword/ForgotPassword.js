import React from "react";

const ForgotPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.email.value

    fetch("https://immocoin-rails.herokuapp.com/users/password", {
      method: "POST",
      headers: { "Content-Type": 'application/json', "Accept": "application/json" },
      body: JSON.stringify({ "user": { email: data } })
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => {
        alert("erreur");
        console.log(error.message);
      });
  }

  return (
    <div className="bg-purple min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Mot de passe oublié</h1>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

        <section>
          <h3 className="font-bold text-2xl">Entrez mon adresse mail</h3>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleSubmit} >
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <input type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700
            focus:outline-none border-b-4 border-purple focus:border-red transition duration-500
            px-3 pb-3"/>
            </div>
            <button className="bg-purple hover:bg-red
          text-white py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">M'envoyer un mail</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ForgotPassword;

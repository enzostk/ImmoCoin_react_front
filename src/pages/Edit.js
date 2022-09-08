import React, { useEffect, useState } from "react";
import { loggedAtom } from "../services/Atoms/user";
import { useAtom } from "jotai";
import { useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useAtom(loggedAtom)[0];
  const [property, setProperty] = useState("load");
  console.log(token);

  useEffect(() => {
    fetch("https://immocoin-rails.herokuapp.com/properties/" + id)
      .then((res) => res.json())
      .then((property) => {
        setProperty(property);
        console.log(property);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = e.target.newTitle.value;
    const newPrice = e.target.newPrice.value;
    const newSurface = e.target.newSurface.value;
    const newDescription = e.target.newDescription.value;

    fetch("https://immocoin-rails.herokuapp.com/properties/" + id , {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        property: {
          title: newTitle,
          description: newDescription,
          price: newPrice,
          surface: newSurface
        },
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error.message);
      });
      navigate("/")
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6 bg-purple mt-4">
        <div className="md:col-span-1 pl-2">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-white mt-4">
              Modifier une annonce
            </h3>
            <p className="mt-1 text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              nihil dolor delectus aut excepturi dicta aliquam ut, doloremque
              magnam voluptas similique temporibus vero, velit enim molestiae,
              commodi debitis eius vitae?
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Titre de votre annonce
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        id="newTitle"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={property.title}
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Prix
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        id="newPrice"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={property.price}
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Surface
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        id="newSurface"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={property.surface}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="Description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      type="text"
                      id="newDescription"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      defaultValue={property.description}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Télecharger un fichier</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">ou faire glisser</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
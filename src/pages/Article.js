import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loggedAtom } from "../services/Atoms/user";
import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";

const Article = () => {
  const { id } = useParams();
  const [property, setProperty] = useState();
  const [logged] = useAtom(loggedAtom);
  const [current_user] = useAtom(currentUserAtom);
  const [buttonText, setButtonText] = useState('Afficher le mail');

  useEffect(() => {
    fetch("https://immocoin-rails.herokuapp.com/properties/" + id)
      .then((res) => res.json())
      .then((property) => {
        setProperty(property);
        console.log(property);
        console.log(logged);
      })
      .catch((error) => console.error(error));
  }, [id, logged]);

  const changeBtn = () => {
    setButtonText(`${property.user.email}`);
  }

  if (property === undefined) return <h1>LOADING ...</h1>;
  return (
    <div className="details-container space-x-12">
      <img
        src="https://www.cactusnumerique.com/wp-content/uploads/elementor/thumbs/webaliser-_TPTXZd9mOo-unsplash-min-ovxvd1b3srjeno67z4zms7tarxzzih276y2vvdj8zw.jpg"
        alt=""
        className=""
      />
      <div className="details-text pl-4 pr-4">
        <div className="flex items-center justify-between">
          <h1>{property.title}</h1>
          <div className="flex gap-2 mt-3 mb-3">
            <span className="badge">{property.surface}m²</span>
            <span className="badge">
              {Math.round(property.price / property.surface)}€/m²
            </span>
          </div>
        </div>
        <div>
          <span className="text-xl font-bold">{property.price}€</span>
        </div>
        <p className="mb-5">{property.description}</p>

        <div className="flex row align-center gap-2">
          {logged ? (
            <>
              <button onClick={changeBtn} className="button-primary">{buttonText}</button>
            </>
          ) : (
            ""
          )}
          {logged && property.user.id === current_user.id ? (
            <Link to={"/properties/edit/" + property.id}>
              <button className="button-primary">Modifier l'annonce</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;

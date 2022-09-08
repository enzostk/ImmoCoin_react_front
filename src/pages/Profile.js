import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";
import SecondArticle from "../components/Article/SecondArticle";
import { Link } from "react-router-dom";
import NewArticle from "./NewArticle";
const Profile = () => {
  const [currentUser,] = useAtom(currentUserAtom);
  const [, setData] = useState();
  const [userProperties, setUserProperties] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((properties) => {
        setData(properties);
        setUserProperties(
          properties.filter((property) => property.user.id === currentUser.id)
        );
      })
      .catch((error) => console.error(error));
  }, [currentUser.id]);

  if (userProperties === "")
    return <h1>Vous n'avez pas encore ajouté de nouveaux biens.</h1>;
  else
    return (

      <>
       <Link path="/properties/new" element={<NewArticle />}> 
         <button className="button-primary">Créer une annone</button>
       </Link>
        {userProperties &&
          userProperties.map((property) => (
            <SecondArticle
            title={property.title}
            price={property.price}
            description={property.description}
            surface={property.surface}
            id={property.id}
            />
            ))}
        </>
    );
};

export default Profile;

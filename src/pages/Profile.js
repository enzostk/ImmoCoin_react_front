import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";
import SecondArticle from "../components/Article/SecondArticle";

const Profile = () => {
  const [currentUser,] = useAtom(currentUserAtom);
  const [, setData] = useState();
  const [userProperties, setUserProperties] = useState();

  useEffect(() => {
    fetch("https://immocoin-rails.herokuapp.com/properties")
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
        {userProperties &&
          userProperties.map((property) => (
            <SecondArticle
              title={property.title}
              price={property.price}
              description={property.description}
              // email={property.user.email}
              surface={property.surface}
              id={property.id}
            />
          ))}
      </>
    );
};

export default Profile;

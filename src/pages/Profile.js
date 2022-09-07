import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";
import SecondArticle from "../components/Article/SecondArticle";

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
        console.log(userProperties);
      })
      .catch((error) => console.error(error));
  }, []);

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

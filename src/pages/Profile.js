import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";

const Profile = () => {
  const [currentUser, ] = useAtom(currentUserAtom);
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
  }, []);

  if (userProperties === "")
    return <h1>Vous n'avez pas encore ajouté de nouveaux biens.</h1>;

  return (
    <div>
      {userProperties &&
        userProperties.map((property) => {
          return (
            <div>
              price= {property.price}
              description={property.description}
              id={property.id}
              surface={property.surface}
              email={property.user.email}
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default Profile;

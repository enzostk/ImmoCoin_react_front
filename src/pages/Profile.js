import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";

const Profile = () => {
  const [currentUser, setcurrentUser] = useAtom(currentUserAtom);


console.log("kikoo", currentUser.id)

  const [properties, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((properties) => {
        setData(properties);
        // console.log(properties);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {properties &&
        properties.map((property) => {
          if (currentUser.id === property.user.id)
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

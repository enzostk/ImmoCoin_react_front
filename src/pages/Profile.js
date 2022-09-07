import React, { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { currentUserAtom } from "../services/Atoms/currentUser";

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
  }, []);

  if (userProperties === "")
    return <h1>Vous n'avez pas encore ajouté de nouveaux biens.</h1>;

  return (
    <div className="details-container flex flex-row space-x-12">
      <div className="basis-1/3">
        <img
          src="https://www.cactusnumerique.com/wp-content/uploads/elementor/thumbs/webaliser-_TPTXZd9mOo-unsplash-min-ovxvd1b3srjeno67z4zms7tarxzzih276y2vvdj8zw.jpg"
          alt=""
        />
      </div>
      <div className="details-text pl-4 pr-4">
        <div className="flex items-center justify-between">
          <h1>Title of property</h1>
          <div className="flex gap-2 mt-3 mb-3">
            <span className="badge">1000m²</span>
            <span className="badge">30€/m²</span>
          </div>
        </div>
        <div>
          <span className="text-xl font-bold">580 000€</span>
        </div>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          voluptas necessitatibus recusandae sapiente expedita, sed voluptatibus
          quod, corrupti explicabo aperiam voluptate ipsum. Dolorem, accusamus
          eaque. Mollitia voluptate doloribus odit laboriosam.
        </p>
      </div>
    </div>
      //   <div>
      //   {userProperties &&
      //     userProperties.map((property) => {
      //       return (
      //         <div>
      //           price= {property.price}
      //           description={property.description}
      //           id={property.id}
      //           surface={property.surface}
      //           email={property.user.email}
      //           <br />
      //         </div>
      //       );
      //     })}
      // </div>
  );
};

export default Profile;

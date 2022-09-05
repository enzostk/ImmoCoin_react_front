import React, { useState, useEffect } from "react";
import Article from "../components/Article/Article";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        })
      .catch((error) => console.error(error));
  },[]);


  return (
    <div>
      <Article />
    { data && data.map((property) => (
      <>
      <h5>Titre:{property.title}</h5>
      <p>Prix:{property.price}</p>
      <p>Descritpion:{property.description}</p>
      <p>Numéro:{property.id}</p>
      </>
    ))}
    </div>
  )
};

export default Home;

import React, { useState, useEffect } from "react";
import Article from "../components/Article/Article";
import Hero from "../components/Hero/Hero";
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
    <Hero/>
    <div className="card-container h-screen bg-red-200 flex items-center justify-center gap-10">
    { data && data.map((property) => (
      
      <Article 
      title={property.title}
      price={property.price}
      description={property.description}
      id={property.id}
      surface={property.surface}
      />
      // <>
      // <h5>Titre:{property.title}</h5>
      // <p>Prix:{property.price}</p>
      // <p>Descritpion:{property.description}</p>
      // <p>Numéro:{property.id}</p>
      // </>
    ))}
    </div>
    </div>
  )
};

export default Home;

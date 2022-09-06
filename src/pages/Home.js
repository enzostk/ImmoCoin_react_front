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
        // console.log(data);
        })
      .catch((error) => console.error(error));
  },[]);

  return (
    <div>
      <Hero/>
      <div className="card-container h-screen flex items-center justify-center gap-10">

      { data && data.map((property) => (
        <Article 
        title={property.title}
        price={property.price}
        description={property.description}
        // email={property.user.email}
        surface={property.surface}
        id={property.id}
        />
        ))}

      </div>
    </div>
  )
};

export default Home;

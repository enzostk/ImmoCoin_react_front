import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [buttonText, setButtonText] = useState("Contact");

  useEffect(() => {
    fetch("http://localhost:3000/properties/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const showEmail = () => {
    setButtonText("property@email.com");
  };

  return (
    <div className="details-container">
      <img
        src="https://www.cactusnumerique.com/wp-content/uploads/elementor/thumbs/webaliser-_TPTXZd9mOo-unsplash-min-ovxvd1b3srjeno67z4zms7tarxzzih276y2vvdj8zw.jpg"
        alt=""
      />
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

        <button className="button-primary mb-4" onClick={showEmail}>
          {buttonText}
        </button>
      </div>

      {/* <h1>{data.title}</h1>
      <p>{data.description}</p> */}
    </div>
  );
};

export default Article;

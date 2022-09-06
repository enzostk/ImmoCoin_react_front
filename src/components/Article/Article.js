import React from "react";
import image from "../../assets/images/headphone.png";

const Article = (property) => {
  return (
    <div className="card">
      <img className="w-full h-full object-cover" src={image} alt="headphone"/>

      <div className="p-5 flex flex-col gap-3">

        {/* Product Badge */}
        <div className="flex items-center gap-2">
          <span className="badge">{property.surface}m²</span>
          <span className="badge">{Math.round(property.price/property.surface)}€/m²</span>
        </div>

        {/* Product Title */}
        <h2 className='product-title' title="title">
          {property.title}
        </h2>

        <h5 className='product-description' title="description">
          {property.description.slice(0,45)}
        </h5>

        {/* Product Price */}
        <div>
          <span className='text-xl font-bold'>
          {property.price}€
          </span>
        </div>

        {/* Product action button */}
        <div className="mt-5 flex gap-2">
          <button className="button-primary">Show More</button>
        </div>
      </div>
      </div>
  );
};

export default Article;

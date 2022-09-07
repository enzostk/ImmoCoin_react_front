import React from 'react'

const SecondArticle = (property) => {
  return (
    <div className="details-container flex flex-row space-x-10">
      <div className="basis-1/3">
        <img
          src="https://www.cactusnumerique.com/wp-content/uploads/elementor/thumbs/webaliser-_TPTXZd9mOo-unsplash-min-ovxvd1b3srjeno67z4zms7tarxzzih276y2vvdj8zw.jpg"
          alt=""
          />
      </div>
      <div className="details-text basis-2/3 pl-4 pr-4">
        <div className="flex items-center justify-between">
          <h1>{property.title}</h1>
          <div className="flex gap-2 mt-3 mb-3">
            <span className="badge">{property.surface}m²</span>
            <span className="badge">{Math.round(property.price/property.surface)}€/m²</span>
          </div>
        </div>
        <div>
          <span className="text-xl font-bold"> {property.price}€</span>
        </div>
        <p className="mb-5">
          {property.description}
        </p>
      </div>
    </div>
  )
}

export default SecondArticle;
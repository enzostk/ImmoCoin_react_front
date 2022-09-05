import React from 'react'
import image from "../../assets/images/headphone.png"
import star from "../../assets/images/star.svg"
import star2 from "../../assets/images/star-half-fill.svg"
import star3 from "../../assets/images/star-no-fill.svg"
import love from "../../assets/images/love.svg"
import eye from "../../assets/images/eye.svg"
const Article = () => {
  return (
  <body class="card-container h-screen bg-red-200 flex items-center justify-center gap-10">
    
    <div class="card">
      <img className="w-full h-full object-cover" src={image} alt="headphone"/>

      <div className="p-5 flex flex-col gap-3">

        {/* Product Badge */}
        <div className="flex items-center gap-2">
          <span className="badge">Stock ready</span>
          <span className="badge">Official store</span>
        </div>

        {/* Product Title */}
        <h2 className='product-title' title="title">
          Best Headphone Ever
        </h2>

        {/* Product Price */}
        <div>
          <span className='text-xl font-bold'>
            Rp 400.000
          </span>
          <div className='flex items-center gap-2 mt-1'>
            <span className="text-sm line-through opacity-50">
              Rp 500.000
            </span>
            <span className="discount-percent">
              Save 20%
            </span>
          </div>
        </div>

        {/* Product rating */}
        <span className="flex items-center mt-1">
          <img src={star} alt="star1"/>
          <img src={star} alt="star2"/>
          <img src={star} alt="star3"/>
          <img src={star2} alt="star4"/>
          <img src={star3} alt="star5"/>
          <span className="text-xs ml-2">
            20k reviews
          </span>
        </span>

        {/* Product action button */}
        <div className="mt-5 flex gap-2">
          <button className="button-primary">Show More</button>
          <button class="button-icon">
            <img 
              className="opacity-50"
              src={love}
              alt="love" 
            />
          </button>
          <button class="button-icon">
            <img 
              className="opacity-50"
              src={eye}
              alt="eye" 
            />
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img className="w-full h-full object-cover" src={image} alt="headphone"/>

      <div className="p-5 flex flex-col gap-3">

        {/* Product Badge */}
        <div className="flex items-center gap-2">
          <span className="badge">Stock ready</span>
          <span className="badge">Official store</span>
        </div>

        {/* Product Title */}
        <h2 className='product-title' title="title">
          Best Headphone Ever
        </h2>

        {/* Product Price */}
        <div>
          <span className='text-xl font-bold'>
            Rp 400.000
          </span>
          <div className='flex items-center gap-2 mt-1'>
            <span className="text-sm line-through opacity-50">
              Rp 500.000
            </span>
            <span className="discount-percent">
              Save 20%
            </span>
          </div>
        </div>

        {/* Product rating */}
        <span className="flex items-center mt-1">
          <img src={star} alt="star1"/>
          <img src={star} alt="star2"/>
          <img src={star} alt="star3"/>
          <img src={star2} alt="star4"/>
          <img src={star3} alt="star5"/>
          <span className="text-xs ml-2">
            20k reviews
          </span>
        </span>

        {/* Product action button */}
        <div className="mt-5 flex gap-2">
          <button className="button-primary">Show More</button>
          <button class="button-icon">
            <img 
              className="opacity-50"
              src={love}
              alt="love" 
            />
          </button>
          <button class="button-icon">
            <img 
              className="opacity-50"
              src={eye}
              alt="eye" 
            />
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <img className="w-full h-full object-cover" src={image} alt="headphone"/>

      <div className="p-5 flex flex-col gap-3">

        {/* Product Badge */}
        <div className="flex items-center gap-2">
          <span className="badge">Stock ready</span>
          <span className="badge">Official store</span>
        </div>

        {/* Product Title */}
        <h2 className='product-title' title="title">
          Best Headphone Ever
        </h2>

        {/* Product Price */}
        <div>
          <span className='text-xl font-bold'>
            Rp 400.000
          </span>
          <div className='flex items-center gap-2 mt-1'>
            <span className="text-sm line-through opacity-50">
              Rp 500.000
            </span>
            <span className="discount-percent">
              Save 20%
            </span>
          </div>
        </div>

        {/* Product rating */}
        <span className="flex items-center mt-1">
          <img src={star} alt="star1"/>
          <img src={star} alt="star2"/>
          <img src={star} alt="star3"/>
          <img src={star2} alt="star4"/>
          <img src={star3} alt="star5"/>
          <span className="text-xs ml-2">
            20k reviews
          </span>
        </span>

        {/* Product action button */}
        <div className="mt-5 flex gap-2">
          <button className="button-primary">Show More</button>
          <button class="button-icon">
            <img 
              className="opacity-50"
              src={love}
              alt="love" 
            />
          </button>
          <button class="button-icon">
            <img 
              className="opacity-50"
              src={eye}
              alt="eye" 
            />
          </button>
        </div>
      </div>
    </div>

  </body>    
    
  )
}

export default Article

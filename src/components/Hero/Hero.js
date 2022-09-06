import React from 'react'
import herologo from "../../assets/images/pngegg.png"
const Hero = () => {
  return (
    <div className="bg-purple">
      <div className="px-32">
        <div className="flex flex-row space-x-12">
          <div className="basis-3/4 py-32">
            <span className="text-5xl font-bold text-third">
              Bienvenue chez ImmoCoin
            </span>
            <div className='pt-1'>
             <span className="text-blue-900 font-bold text-5xl">
               Online business
             </span>
            </div>
            <div className="pt-4">
              <span className="text-third">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, cum omnis temporibus voluptatem impedit iusto sed nisi eum, laboriosam dignissimos ratione dolor ex aliquam alias nihil assumenda ea minus consequatur corrupti libero, optio facilis ipsum dolore quaerat! Aliquam suscipit corporis, aspernatur perspiciatis itaque porro necessitatibus dolor, fuga architecto, a similique?
              </span>
            </div>
          </div>
          <div className='basis-1/4 px-0 py-0'>
            <img src={herologo} alt="herologo" width="" height=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

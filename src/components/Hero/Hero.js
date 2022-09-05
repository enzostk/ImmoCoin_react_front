import React from 'react'
import herologo from "../../assets/images/hero-logo.jpg"
const Hero = () => {
  return (
    <div className="bg-purple">
      <div className="px-32 py-32">
        <div className="flex flex-row space-x-12">
          <div className="basis-1/2">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, est.
              </span>
            </div>
          </div>
          <div className='basis-1/2 px-0 py-0'>
            <img src={herologo} alt="herologo" width="500" height="600"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

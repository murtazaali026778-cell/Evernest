import React from 'react'
import HeroSpotlight from '../components/HeroSpotlight'
import B3 from '../src/assets/B3.webp'
import B2 from '../src/assets/BOTTLE2.webp'
import B1 from '../src/assets/BOOTLE1.webp'

import './Home.css'
import Pics from '../components/Pics'
import Product from '../components/Product'

function Home() {
  const pics = [
    {
      id: 1,
      img: B1,
      title: 'Thermal Flasks',
      alt: 'Stainless steel thermal flasks with carry straps'
    },
    {
      id: 2,
      img: B2,
      title: 'Tumbler Mugs',
      alt: 'Insulated pastel tumbler mug with handle and straw'
    },
    {
      id: 3,
      img: B3,
      title: 'Travel Bottles',
      alt: 'Portable yellow stainless steel travel bottle with rope strap'
    }
  ]

  return (
    <>
      <HeroSpotlight />
      <div className='category'>
        <h2 className='categoryText'>
          Shop by category
        </h2>

        <div className='categorylinks mb-6'>
          {pics.map((e) => {
            return (
              <Pics
                key={e.id}
                img={e.img}
                title={e.title}
                alt={e.alt}
              />
            )
          })}
        </div>

         <div className='new'>
          <h4 className='h4arr'>New Arrivals</h4>
          <p className='arr'>The most recent addition to the shop</p>
          <div className="productParent">
            <Product />
              <Product />
                <Product />
                <Product />
              
          </div>
      </div>
      </div>
     
      {/* <Product /> */}
    </>
  )
}

export default Home
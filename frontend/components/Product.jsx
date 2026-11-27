import React from 'react'
import './Product.css'
const Product = () => {
  return (
    <div className='mainproduct'>
      <div className="wrapperProduct">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlkSXitX7IYbXSvGXIYuxW4SnhORL072yEdKAdYqKSLDSw1g3ZCRIggyH&s=10" alt="image" />
      </div>

      <div className='texts'>
        <span className='mini-txt'>
          Evernest
        </span>
       <p className='productName'>Stainless Steal Water Bottle</p>
       <p className='price'>PKR  300</p>
       
      </div>
    </div>
  )
}

export default Product

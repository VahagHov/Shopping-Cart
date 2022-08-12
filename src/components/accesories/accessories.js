import React, { useState } from 'react';

  export default function Accessories() {

    const product_accessories = [

            {id: 1 , name: 'Guess', price: '7.99' , image: './images/accesories-1.jpg'},
            {id: 2 , name: 'Gucci', price: '9', image: './images/accesories-2.jpg'},
            {id: 3 , name: 'Hugo BOSS', price: '6', image: './images/accesories-3.jpg'},
  
    ]
      
    return (
      <div className='products'>
          {product_accessories.map((e) => (
            <div className='card'>
              <div>
                <img
                  className='product-image' 
                  src={e.image}
                  alt={e.name}
                  />
              </div>
  
              <div>
                <h3 className='product-name'>{e.name}</h3>
              </div>
              
              <div className='product-price'>
                ${e.price}
              </div>
  
              <div>
                <button className='product-ad-button'>Add to Cart</button>
              </div>
              
            </div>
    
          ))}
  
      </div>
    )
  }
  
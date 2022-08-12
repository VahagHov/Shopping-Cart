import React, { useState } from 'react';

  export default function Clothes() {

    const product_clothes = [

            {id: 1 , name: 'Guess', price: '17.99' , image: './images/clothes-1.jpg'},
            {id: 2 , name: 'Armani Exchange', price: '57.9', image: './images/clothes-2.jpg'},
            {id: 3 , name: 'Hugo BOSS', price: '99', image: './images/clothes-3.jpg'},
  
    ];

   
    
      
    return (
      <div className='products'>
          {product_clothes.map((e) => (
            <div className='card' key={e.id}>
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
  
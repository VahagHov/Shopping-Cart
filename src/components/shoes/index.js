import React from 'react'

export default function Shoes() {

    const product_shoes = [

      {id: 3 , name: 'Gucci', price: '566' , image: './images/shoes-1.jpg'},
      {id: 4 , name: 'Calvin Clein', price: '77', image: './images/shoes-2.jpg'},
      {id: 5 , name: 'Armani Exchange', price: '41', image: './images/shoes-3.jpg'},
      
    ]
      
    return (
      <div className='products'>
          {product_shoes.map((e) => (
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
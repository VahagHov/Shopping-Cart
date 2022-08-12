import React from 'react'

export default function Watches() {

    const product_watches = [

      {id: 3 , name: 'Guess', price: '56' , image: './images/watches-1.jpg'},
      {id: 4 , name: 'Calvin Clein', price: '77', image: './images/watches-2.jpg'},
      {id: 5 , name: 'Tomy Hielfigher', price: '41', image: './images/watches-3.jpg'},
      
    ]
      
    return (
      <div className='products'>
          {product_watches.map((e) => (
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
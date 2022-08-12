import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import  Clothes  from '../clothes';
import Shoes from '../shoes';
import Accessories from '../accesories/accessories';
import Watches from '../watches/watches';

export default function Catalog() {


  return (
    <div  className='main'>
        <nav className='main_nav'>
            <ul className='main_catalog'>
                <li><Link to='/clothes'>Clothes</Link ></li>
                <li><Link to='/shoes'>Shoes</Link ></li>
                <li><Link to='/accessories'>Accessories</Link ></li>
                <li><Link to='/watches'>Watches</Link ></li> 
            </ul>
        </nav>
        <Routes>
          <Route path="/clothes" exact element={<Clothes />} />
          <Route path="/shoes" exact element={<Shoes />} />
          <Route path="/accessories" exact element={<Accessories />} />
          <Route path="/watches" exact element={<Watches />} />
        </Routes>
    </div>
  )
}


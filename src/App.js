import './App.css';
import './products.css';
import './components/header/style.css'
import './components/catalog/style.css'
import Header from './components/header';
import Catalog from './components/catalog';
import { useState } from 'react';

function App() {
  return (
        <div className='App'>
          <Header />
          <Catalog />
        </div>  
  );
}
export default App;

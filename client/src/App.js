import React from 'react';
import { BrowserRouter as Router ,  Route , Routes } from "react-router-dom"


import "./App.css"
import ShowProducts from './components/ShowProduct';
import AddProduct from './components/AddProduct';
import NavBarManu from './components/NavBarManu';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarManu />
        <Routes>
          <Route  path='/' element={<ShowProducts/>} />
          <Route path='addproduct/' element={<AddProduct/>} />
          <Route path='/:id/' element={<ProductDetail/>} />
          <Route path='/:id/update' element={null} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

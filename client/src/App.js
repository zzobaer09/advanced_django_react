import React from 'react';
import { BrowserRouter as Router ,  Route , Routes } from "react-router-dom"


import "./App.css"
import ShowProducts from './components/ShowProduct';
import AddProduct from './components/AddProduct';
import NavBarManu from './components/NavBarManu';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBarManu />
        <Routes>
          <Route  path='/' element={<ShowProducts/>} />
          <Route path='addproduct/' element={<AddProduct/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

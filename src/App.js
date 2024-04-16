// import logo from './logo.svg';

import React from 'react'
import {Route,Routes} from 'react-router-dom';

import './App.css';
import Cart from './cart/Cart';
import ViewCart from './cart/ViewCart';
// import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   <Routes>

    <Route path='/' element={<Cart/>} />
    <Route path='/view' element={<ViewCart/>} />
    

   </Routes>
   
  );
}

export default App;

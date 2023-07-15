import {  Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import React from "react";
// import Login from "../LoginSignupPage/Components/UserAuth/UserAuth"
import Intro from "../HomeM/Intro";
import Cart from "../Cart_and_Payment/Component/Pages/Cart";
import ProductAll from "../ProductSection/ProductAll";
import ProductDetail from "../ProductSection/ProductDetail";
import Success from "../Cart_and_Payment/Success/Success";
 import Todo from "../ToDo/Todo"
 import Contact from "../Contact/Contact";
 import About from "../About/About";
function AllRoutes() {
 
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:category" element={<ProductAll />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/success" element={<Success />}> </Route>
        <Route path="/todo" element={<Todo/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/Intro" element={<Intro />}/>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
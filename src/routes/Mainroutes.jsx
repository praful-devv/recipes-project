import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Favourite from "../pages/Favourite";
import Order from "../pages/Order";
import UpdateRecipe from "../components/UpdateRecipe";
import Pagenotfound from "../pages/Pagenotfound";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Pagenotfound />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path='/update' element={<UpdateRecipe/>} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/about" element={<About />} />
     
      
    </Routes>
  );
};

export default Mainroutes;

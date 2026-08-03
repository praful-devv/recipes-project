import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Favourite from "../pages/Favourite";
import Order from "../pages/Order";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default Mainroutes;

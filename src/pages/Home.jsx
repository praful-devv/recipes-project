import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../context/sidebarContext";
import Search from "../components/Search";
import CreateRecipes from "../components/CreateRecipes";

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
     <h1 className="text-white">home</h1>
    </div>
  );
};

export default Home;

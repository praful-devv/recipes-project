import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { sidebar } from "../context/sidebarContext";
import { Menu, MenuIcon, MenuSquareIcon } from "lucide-react";

const Navbar = () => {
  const [menu, setmenu] = useContext(sidebar);

  return (
    <div className="bg-gray-950 flex gap-3  justify-center p-2 border-b border-white relative flex-wrap">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl text-red-300" : "text-xl text-white"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl text-red-300" : "text-white text-xl"
        }
        to="/Recipes"    
      >
        Recipes
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl text-red-300" : "text-xl text-white"
        }
        to="/Favourite"
      >
        Favourite
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-xl text-red-300" : "text-xl text-white"
        }
        to="/About"
      >
        About
      </NavLink>
 
    </div>
  );
}; 

export default Navbar;
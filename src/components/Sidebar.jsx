import React, { useContext } from "react";
import { Link,  } from "react-router-dom";
import { sidebar } from "../context/sidebarContext";
import { X, XCircle, XIcon, XLineTopIcon } from "lucide-react";

const Sidebar = () => {



 let [menu,setmenu] =  useContext(sidebar)

  return (
    <div
      style={{ transform: `translateX(${menu})`  }}
      className="fixed z-10 top-11 border-t border-white  right-0 w-48  lg:w-80 h-screen bg-gray-400 flex flex-col justify-center items-center gap-4"
    >
    

      <button
        onClick={() => {
          setmenu("100%");
        }}
        className="absolute top-10 text-2xl text-black"
      >
        <X className="text-white" />
      </button>

     
    </div>
  );
};

export default Sidebar;

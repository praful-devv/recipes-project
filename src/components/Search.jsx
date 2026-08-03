import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Sea } from "../context/SearchContext";

const Search = () => {

  

  const [sea, setsea] = useContext(Sea);

  
  
  return (
    <div className="p-2 flex justify-center items-center gap-2">
     
      <input
      onChange={(e)=>{setsea(e.target.value)}} 
      className="text-white outline-0 border-white border-b text-center" id="Email"  />
     
    </div>
  );
};

export default Search;

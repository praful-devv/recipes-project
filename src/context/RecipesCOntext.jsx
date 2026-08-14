import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export let recipes = createContext();
const RecipesCOntext = ({ children }) => {

  let [form, setform] = useState(false);
  let [makecart,setcart] = useState()
  const [update, setupdate] = useState();
  // const [allrecipesdata, setallrecipesdata] = useState();

  
  async function Recipesdata() {
    try {
         let recipesData = await axios.get(
           "https://dummyjson.com/recipes?limit=50",
         );

         return recipesData;
    } catch (error) {
      toast.error(error)
    }
  }
  let recipesData = Recipesdata();
  // setallrecipesdata(recipesData)




  return (
    <div>
      <recipes.Provider
        value={[
          recipesData,
          form,
          setform,
          makecart,
          setcart,
          update,
          setupdate,
        ]}
      >
        {children}
      </recipes.Provider>
    </div>
  );
};

export default RecipesCOntext;

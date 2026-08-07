import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export let recipes = createContext();
const RecipesCOntext = ({ children }) => {

  let [form, setform] = useState(false);

  async function Recipesdata() {
    let recipesData = await axios.get("https://dummyjson.com/recipes?limit=50");

    return recipesData;
  }
  let recipesData = Recipesdata();

  let [makecart,setcart] = useState()



  return (
    <div>
      <recipes.Provider value={[recipesData, form, setform, makecart, setcart]}>
        {children}
      </recipes.Provider>
    </div>
  );
};

export default RecipesCOntext;

import React, { createContext, useEffect, useState } from "react";



export let recipes = createContext();
const RecipesCOntext = ({ children }) => {
  let [form, setform] = useState(false);
  let [makecart, setcart] = useState();
  const [update, setupdate] = useState();

  return (
    <div>
      <recipes.Provider
        value={[ null, form, setform, makecart, setcart, update, setupdate]}
      >
        {children}
      </recipes.Provider>
    </div>
  );
};

export default RecipesCOntext;


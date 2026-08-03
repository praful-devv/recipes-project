import React, { useContext, useState } from 'react'
import RecipesForm from './RecipesForm'
import { recipes } from '../context/RecipesCOntext';
const CreateRecipes = () => {
    const [res,form,setform]=useContext(recipes);
  return (
    <div className=" bg-gray-900 p-4">
      <button
        onClick={() => {
          setform(true);
        }}
        className="text-white bg-green-500 px-2 rounded"
      >
        Create recipes
      </button>
      {form ? <RecipesForm /> : ''}
    </div>
  );
}

export default CreateRecipes
import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { XIcon } from "lucide-react";
import { recipes } from "../context/RecipesCOntext";
import { getRecipe, upDate } from "../api/Recipe";
import { postRecipe } from "../api/Recipe";

const UpdateRecipe = () => {
  const [allrecipedData, fm, setform, makecart, setcart, update, setupdate] =
    useContext(recipes);

  let [alldata, setdata] = useState();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function res() {
    let { data } = await getRecipe();
    setdata(data.recipes);
  }

  useEffect(() => {
    res();
  }, []);

  // console.log(update)
  // console.log(alldata)
 async function form(data) {
    let image = URL.createObjectURL(data.image[0]);

    let a = alldata.findIndex((elem) => {
      return elem.id == update.id
    });

    let abc ={
    name : data.name,
    image : image,
    tags : data.tags,
    cuisine : data.cuisine,
    prepTimeMinutes : data.prepTimeMinutes,
    des : data.des,
    instructions : data.instructions,
    ingredients : data.ingredients,

    }


    const response = await upDate(abc,update.id);

    console.log(response.data)

   setupdate(response.data)
  
    reset();
  }

  return (
    <div className=" h-screen bg-gray-600">
      <Navbar />

      <form
        className="  flex  flex-col gap-2  items-center p-16 "
        onSubmit={handleSubmit(form)}
      >
        <>
          <input
            className="text-black bg-gray-500 w-46 p-2 text-sm"
            type="file"
            {...register("image", { required: "recipe image is required" })}
          />

          {errors.image ? (
            <small className="text-red-600 text-sm">
              {errors.image.message}
            </small>
          ) : (
            " "
          )}
        </>

        <input
          type="text"
          className="outline-0 border-b-2"
          {...register("name", { required: "name is required" })}
          placeholder="Name"
        />

        {errors.name ? (
          <small className="text-red-600 text-sm">{errors.name.message}</small>
        ) : (
          " "
        )}
        <input
          type="text"
          className="outline-0 border-b-2"
          {...register("tags", { required: "tags is required" })}
          placeholder="tags"
        />
        {errors.tags ? (
          <small className="text-red-600 text-sm">{errors.tags.message}</small>
        ) : (
          " "
        )}
        <input
          type="text"
          className="outline-0 border-b-2"
          {...register("cuisine", { required: "cuisine is required" })}
          placeholder="cuisine"
        />
        {errors.cuisine ? (
          <small className="text-red-600 text-sm">
            {errors.cuisine.message}
          </small>
        ) : (
          " "
        )}
        <input
          type="text"
          className="outline-0 border-b-2"
          {...register("prepTimeMinutes", {
            required: "prepTimeMinutes is required",
          })}
          placeholder="prepTimeMinutes"
        />
        {errors.prepTimeMinutes ? (
          <small className="text-red-600 text-sm">
            {errors.prepTimeMinutes.message}
          </small>
        ) : (
          " "
        )}

        <input
          className="outline-0 border-b-2"
          placeholder="Descripition"
          type="text"
          {...register("des", { required: "descripition" })}
        />

        {errors.des ? (
          <small className="text-red-600 text-sm">{errors.des.message}</small>
        ) : (
          ""
        )}

        <input
          className="outline-0 border-b-2"
          type="text"
          {...register("instructions", { required: "filled the data" })}
          placeholder="instructions"
        />
        {errors.instructions ? (
          <small className="text-red-600 text-sm">
            {errors.instructions.message}
          </small>
        ) : (
          ""
        )}
        <input
          className="outline-0 border-b-2"
          type="text"
          {...register("ingredients", { required: "filled the data" })}
          placeholder="ingredients"
        />
        {errors.ingredients ? (
          <small className="text-red-600 text-sm">
            {errors.ingredients.message}
          </small>
        ) : (
          ""
        )}

        <button className="text-white bg-green-500 px-2 rounded">done</button>
      </form>
    </div>
  );
};

export default UpdateRecipe;

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { recipes } from "../context/RecipesCOntext";
import { CrossIcon, X, XIcon } from "lucide-react";
import {toast} from 'react-toastify'

const RecipesForm = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [res, fm, setform, makecart, setcart] = useContext(recipes);

  let ids = 50;
  function form(data) {
    let newdata = {
      ...data,
      id: ids + 1,
      image: URL.createObjectURL(data.image[0]),
    };
    setcart(newdata);

   toast.success('Recipe created');
    reset();
  }

  return (
    <div className="py-8 flex-col flex justify-center  items-center ">
      <form
        className=" bg-gray-300 flex rounded-2xl flex-col gap-2 relative items-center p-16 "
        onSubmit={handleSubmit(form)}
      >
        <p
          onClick={() => {
            setform(false);
          }}
          className="text-black hover:text-red-500 hover:font-extrabold rounded text-2xl absolute top-5 right-5"
        >
          <XIcon />
        </p>
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

export default RecipesForm;

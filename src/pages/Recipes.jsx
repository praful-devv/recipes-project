import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { recipes } from "../context/RecipesCOntext";
import Search from "../components/Search";
import { Sea } from "../context/SearchContext";
import { Outlet, useNavigate } from "react-router-dom";
import CreateRecipes from "../components/CreateRecipes";
import UpdateRecipe from "../components/UpdateRecipe";
import { toast } from "react-toastify";
import { getRecipe } from "../api/Recipe";


const Recipes = () => {
  const [alldata, setdata] = useState([]);
  const [pastdata, setpastdata] = useState([]);
  let navigate = useNavigate();
  let [sea, setsea] = useContext(Sea);
  const [allrecipedData, fm, setform, makecart, setcart, update, setupdate] = useContext(recipes);

  

  async function data() {

    try{
    let { data } = await getRecipe();
    let { recipes } = data;
    let newdata  = makecart?[...pastdata,makecart] :pastdata
    setpastdata(newdata)
    let olddata =  [...recipes,...newdata]

    update ?olddata[update.id-1] = update:olddata
   
   
    setdata(olddata);
    }
    catch(error){
     console.log(error.name)
     toast.error(error.message)
    }
   
  }
 
  
  
  
  useEffect(() => {
   
    data();
  }, [makecart,update]);

  1;
  const query = (sea || "").trim().replace(/\s+/g, " ").toLowerCase();
  const searchcart = alldata.filter((val) =>
  val && val.name?.toLowerCase().includes(query),
  ) 



  return (
    <div className="bg-gray-900 h-screen  flex flex-col">
      <Navbar />
      <Search />
      <CreateRecipes />
      

      <div className=" flex  flex-wrap bg-gray-900  md:justify-center p-2 gap-8">
        {searchcart.map((elem, id) => {
          return (
            <div
              key={id}
              className="hover:scale-103 w-full flex flex-col md:w-80 md:border-2  md:flex-wrap border-b-2 border-white p-2 box rounded-2xl "
            >
              <div className="flex py-2 px-6 items-center gap-4 justify-between">
                <img
                  loading="lazy"
                  className="w-20 aspect-square rounded-full object-cover object-center "
                  src={elem.image}
                />

                <div className="flex justify-center items-center  h-20  p-2 ">
                  <h3 className="text-sm  text-center font-bold text-white uppercase break-all overflow-auto hide">
                    {elem.name}
                  </h3>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className=" grid grid-cols-2 justify-items-center   p-2 gap-2 w-[60%]">
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs  w-[99%] text-center rounded-md bg-gray-500 break-all overflow-auto hide">
                    {elem.tags[0]}
                  </p>
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs w-[99%] text-center bg-gray-500 rounded-md break-all overflow-auto hide">
                    {elem.cuisine}
                  </p>
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs w-[99%] text-center bg-gray-500 rounded-md break-all overflow-auto hide">
                    {elem.prepTimeMinutes} Minutes
                  </p>
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs w-[99%] text-center bg-gray-500 rounded-md break-all overflow-auto hide">
                    rating: {elem.rating}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center p-2">
                <button
                  onClick={() => {
                    navigate(`/order/${elem.id}`);
                  }}
                  className="text-white px-2 py-2  bg-green-500 w-40 rounded-xl"
                >
                  Order
                </button>
              </div>
              <div className=" flex justify-center items-center m-2 ">
                <button
                  onClick={() => {
                    setupdate(elem);
                    navigate("/update");
                  }}
                  className="text-white  px-4 py-2  rounded-xl  bg-red-500 "
                >
                  Update recipe
                </button>
              </div>
            </div>
          );
        })}

        {/* {alldata.map((elem, id) => {
          return (
            <div
              key={id}
              className=" w-full flex flex-col md:w-80 md:border-2  md:flex-wrap border-b-2 border-white p-2 "
            >
              <div className="flex py-2 px-6 items-center gap-4 justify-between">
                <img
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover object-center"
                  src={elem.image}
                />

                <div className="flex justify-center items-center bg-gray-800 h-20 w-60 p-2 ">
                  <h3 className="text-xl text-center font-bold text-white">
                    {elem.name}
                  </h3>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className=" grid grid-cols-2 justify-items-center   p-2 gap-2 w-[60%]">
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs  w-[99%] text-center bg-gray-500">
                    {elem.tags[0]}
                  </p>
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs w-[99%] text-center bg-gray-500">
                    {elem.cuisine}
                  </p>
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs w-[99%] text-center bg-gray-500">
                    {elem.prepTimeMinutes} Minutes
                  </p>
                  <p className="text-white  flex justify-center items-center p-2 h-10 text-xs w-[99%] text-center bg-gray-500">
                    rating: {elem.rating}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center p-2">
                <button className="text-white px-6 py-2  bg-green-500 w-30">
                  Order
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Recipes;

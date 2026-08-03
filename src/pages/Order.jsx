import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { recipes } from "../context/RecipesCOntext";
import { Library } from "lucide-react";

const Order = () => {
  const [data, setdata] = useState([]);

  let { id } = useParams();
  let [recepis] = useContext(recipes);
  let navigate = useNavigate()

  async function Recipesdata() {
    let { data } = await recepis;
    let res = data.recipes;
    // setdata(data[id])
    let resdata = res.find((elem) => {
      return elem.id == id;
    });

    setdata(resdata);
  }
  Recipesdata();

  return (

  

      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <div className="  flex flex-col p-4  gap-4 relative">
          <div className="w-full flex items-center mt-6 gap-8">
            <img
              className="w-30 object-fit rounded-2xl"
              src={data.image}
              alt=""
              />
            <h2 className="text-white text-2xl text-center">{data.name}</h2>
          </div>
          <div className="p-2">
            <p className="text-white text-xl">
              instructions : {data.instructions}
            </p>

            <div className="p-6">
              {data.ingredients?.map((e, index) => (
                <li className="text-white" key={index}>
                  {e}
                </li>
              ))}
            </div>
        <div className="flex  justify-center">

        <button
        onClick={()=>{
          let fav = JSON.parse(localStorage.getItem("favourite")) || []
          
          let deta = [...fav];
          deta.push(data)
          console.log(deta);
          deta= JSON.stringify(deta);
          
          localStorage.setItem('favourite',deta)

          // deta.push(data);
          // localStorage.getItem("favourite")
          //   ? localStorage.setItem('favourite',deta.push(JSON.parse(fav)))
          //   : localStorage.setItem("favourite", JSON.stringify(deta));
          // console.log(deta);

          // let deta = [fav,data]

          // console.log(fav);

          //  ;
        }}
        className="text-white px-4 py-2 rounded-lg bg-green-500 w-fit">add to favourite</button>
        </div>
          </div>
          <button 
          onClick={()=>{
            navigate("/Recipes");
          }}
          className="absolute right-6 top-6 bg-red-500 px-4 rounded text-white">back</button>
        </div>
      </div>
           
    
  );
};

export default Order;

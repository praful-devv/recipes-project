import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Favourite = () => {

  let navigate = useNavigate()
  let [alldata,setdata]=useState(()=>{
    
    
    
    let deta = JSON.parse(localStorage.getItem('favourite'))  || []
    
    
    return  deta.filter((elem,idx,arr)=> 
      idx === arr.findIndex(data => data.id === elem.id)) 
    
  })
  
  
  

  
  // for(let i = 0;i<deta.length;i++){
  //   for(let j = 0;j<deta.length;j++){
  //     if(deta[j].id == deta[i].id) {
  //       deta.splice(j,1)
  //     }
      
  //   }
    
  // }
  
  
   
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <div className="flex flex-wrap justify-center p-4 gap-4">

    
     {alldata.map((data,idx)=>{
        return (
          <div
            key={data.id}
            className="boxb shadow shadow-violet-600 w-full flex flex-col md:w-80   md:flex-wrap   p-2 rounded-2xl"
          >
            <div className="flex py-2 px-6 items-center gap-4 justify-between">
              <img
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover object-center"
                src={data.image}
              />

              <div className="flex justify-center items-center bg-gray-800 h-20 w-60 p-2 ">
                <h3 className="text-sm  text-center font-bold text-white capitalize wrap-break-words">
                  {data.name}
                </h3>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className=" grid grid-cols-2 justify-items-center   p-2 gap-2 w-[80%]">
                <p className=" rounded capitalize text-white  flex justify-center items-center p-2 h-10 text-sm  w-[99%] text-center bg-gray-500">
                  {data.tags[0]}
                </p>
                <p className=" rounded capitalize text-white  flex justify-center items-center p-2 h-10 text-sm w-[99%] text-center bg-gray-500">
                  {data.cuisine}
                </p>
                <p className=" rounded capitalize text-white  flex justify-center items-center p-2 h-10 text-sm w-[99%] text-center bg-gray-500">
                  {data.prepTimeMinutes} Minutes
                </p>
                <p className=" rounded capitalize text-white  flex justify-center items-center p-2 h-10 text-sm w-[99%] text-center bg-gray-500">
                  rating: {data.rating}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center p-2"></div>
            <div className="flex gap-6 sm:mt-80 md:mt-2 justify-center items-center">
              <button
                onClick={() => {
                  navigate(`/order/${data.id}`);
                }}
                className="text-red-500  bg-white  px-4 py-2 text-lg rounded-md"
              >
                Order
              </button>
              <button
                onClick={() => {
                  let newdata = [...alldata];

                  newdata.splice(idx, 1);

                  setdata(newdata);

                  localStorage.setItem("favourite", JSON.stringify(newdata));
                  toast("romove from favourite", {
                    className: "!text-red-500 !w-60",
                  });
                  //  setdata( alldata.splice(idx,1))
                  //  console.log(alldata.splice(idx, 1));
                }}
                className="text-red-500 rounded-md bg-white  px-4 py-2 text-lg"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Favourite;

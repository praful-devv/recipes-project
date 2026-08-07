import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { recipes } from "../context/RecipesCOntext";
import { Library } from "lucide-react";
import { toast } from "react-toastify";

const Order = () => {
  const [data, setdata] = useState([]);
  const [instru, setinstru] = useState();
  const [moreless, setmoreless] = useState('more');
  const [num, setnum] = useState(3);

  let { id } = useParams();
  let [recepis, fm, setform, makecart, setcart] = useContext(recipes);

  let navigate = useNavigate();

  async function Recipesdata() {
    let { data } = await recepis;

    let res = data.recipes;
    res.push(makecart);
    // setdata(data[id])
    let resdata = res.find((elem) => {
      return elem.id == id;
    });

    setdata(resdata);
    // setTimeout(()=>{
    //   let inst = resdata?.instructions;
    //   if (inst) {
    //     console.log(inst.slice(0, 1));
    //   }
    // },1000)
  }

  function ml(){

    if(moreless == 'more'){

      setnum(10)
      
      setmoreless('less')
    }else{
      setnum(3)
      setmoreless('more')

    }


  }


 

  useEffect(() => {
    Recipesdata();
  }, []);

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
            instructions : {data.instructions?.slice(0, num)}{" "}
            <small
              onClick={() => {
                ml();
              }}
              className="text-red-500 cursor-pointer"
            >
              {moreless}
            </small>
          </p>

          <div className="p-6">
            {Array.isArray(data.ingredients) ? (
              data.ingredients.map((e, index) => (
                <li className="text-white" key={index}>
                  {e}
                </li>
              ))
            ) : (
              <small className="text-white"> {data.ingredients}</small>
            )}
          </div>
          <div className="flex  justify-center">
            <button
              onClick={() => {
                let fav = JSON.parse(localStorage.getItem("favourite")) || [];

                let deta = [...fav];
                deta.push(data);
                console.log(deta);
                deta = JSON.stringify(deta);

                localStorage.setItem("favourite", deta)
                toast.success('add to favourite')
             
                // localStorage.getItem("favourite")
                //   ? localStorage.setItem('favourite',deta.push(JSON.parse(fav)))
                //   : localStorage.setItem("favourite", JSON.stringify(deta));
                // console.log(deta);

                // let deta = [fav,data]

                // console.log(fav);

                //  ;
              }}
              className="text-white px-4 py-2 rounded-lg bg-green-500 w-fit"
            >
              add to favourite
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/Recipes");
          }}
          className="absolute right-6 top-6 bg-red-500 px-4 rounded text-white"
        >
          back
        </button>
      </div>
    </div>
  );
};

export default Order;

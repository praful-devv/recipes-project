import React from "react";
import { useForm } from "react-hook-form";

const Registration = () => {

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    function formSubmit(data){
     
     
      reset()
      
    }

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center ">
      <form 
      className="flex flex-col w-52 h-80 lg:w-80 bg-conic border-white border-2 from-black via-gray-500 to-gray-950 p-2 justify-center gap-4 items-center"
      onSubmit={handleSubmit(formSubmit)}>
        <input
          className="border outline-0 text-white w-[70%] rounded text-sm p-1"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "invalid email",
            },
          })}
          placeholder="Email"
        />
       
        <input
          className="border outline-0 text-white w-[70%] rounded text-sm p-1"
          {...register("password", { required: "email is required" })}
          placeholder="Password"
        />

        <div className="h-10 w-full items-center flex justify-center">
          {errors.email && <p className="text-white">{errors.email.message}</p> || errors.password && <p className="text-white">{errors.password.message}</p>}
        </div>
       

        <button className="text-white bg-green-500 px-4 rounded py-1">click</button>
      </form>
    </div>
  );
};

export default Registration;

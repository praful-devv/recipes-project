import React from 'react'
import Navbar from '../components/Navbar';


const Pagenotfound = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className="grow bg-gray-950 flex justify-center items-center ">
        <h3 className="text-2xl font-bold -translate-y-1/2 text-white md:text-3xl">Page Not Found</h3>
      </div>
    </div>
  );
}

export default Pagenotfound
import React from 'react';
import Dashboard from './dashboard';
import { Navbar } from '@/components';
// import HomePage from './(home)';

export default function Page() {
  return (
    
      <div className="w-full  flex">
      <div className="w-full flex flex-col justify-center items-center  ">
        <div className="w-full shadow-2xl rounded-lg pb-4">
          {/* <p className="heading_two text-dark_green lg:mt-[3.44rem] mt-[0.5rem] text-center">
            Login
          </p> */}
          <Navbar/>
          <Dashboard/>
        </div>
      </div>
    </div>
    
  );
}


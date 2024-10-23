
import React from "react";
// import { Navbar_icon } from "@/public/images";
import Image from "next/image";
import LoginForm from "./loginForm";
const Login = () => {
  return (
    // <div className="w-full h-screen flex">
    <div className="w-full h-screen  flex">
      <div className="w-full flex flex-col justify-center items-center  ">
        <div className="w-[70%] shadow-2xl rounded-lg pb-4">
          <p className="heading_two text-dark_green lg:mt-[3.44rem] mt-[0.5rem] text-center">
            Login
          </p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Image from "next/image";
import SignUpForm from "./SignUpForm";
const SignUp = () => {
  return (
    <div className="w-full h-screen  flex">
    {/* <div className="w-full lg:h-screen lg:w-screen flex justify-center item-center"> */}
      {/* <div className="hidden lg:block lg:w-1/2 h-full">
        <Image
          src={"/Image/signup.png"}
          alt=""
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50%, 33vw"
          className=" object-cover w-full h-full"
        />
      </div> */}
      
      <div className="w-full flex flex-col justify-center items-center  ">
        <div className="w-[70%] shadow-2xl rounded-lg pb-4">
          <p className="heading_two text-dark_green  text-center">
            SignUp
          </p>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

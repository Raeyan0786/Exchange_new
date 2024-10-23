"use client";
import React, { useEffect, useState } from "react";
// import { Navbar_icon, dummy } from "@/public/images";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { getCookie, setCookie,deleteCookie } from 'cookies-next'
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";



export const Navbar = () => {
  const router = useRouter();
  // const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const [isNewToken,setIsNewToken]=useState(getCookie('token'))
  const { token} = useAuth();

  // const { status } = useSession();
  // const router = useRouter();

  const isToken=getCookie('token')
  console.log("token")
  console.log(isNewToken)
  // console.log(isToken.length)
  // console.log(status);
  let AccountView;

  if(isToken?.length>0){
    const NewComponent=()=>{
      return(
        <button
          onClick={() =>
            handleLogout()
          }
          className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase"
        >
          { "Logout"}
        </button>
      )
    }
    AccountView=<NewComponent/>;
  }
  else{
    const NewComponent=()=>{
      return(
        <button
          onClick={() =>
            handleLogin()
          }
          className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase"
        >
          { "Login"}
        </button>
      )
    }
    AccountView=<NewComponent/>
  }
  

  useEffect(() => {
    const isToken=getCookie('token')
    if (isToken) {
      setIsNewToken(isToken)
      console.log(isNewToken)
      // router.push("/");
    }
    else{
      setIsNewToken(null)
    }
    
  }, []);
  // useEffect(() => {
  //   setTimeout(()=>{
  //     console.log("isToken")
  //     console.log(isToken)
  //   },1000)
    
  //     setIsUpdate(true)
  // }, []);
  console.log("isNewToken")
  console.log(isNewToken)
 
  const handleLogout = () => {
    deleteCookie("token")
    setIsNewToken(null)
    router.push("/login");
    router.refresh()
    toast.success("Logout Succesfully")
    
  };

  const handleLogin = () => {
    router.push('/')
    
  };


  return (
    <>

      <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
      <div className="flex flex-grow items-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <button className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase">
            {sideBarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button> */}
        </div>
        <div>
        {/* {AccountView} */}
        <button
          onClick={() =>
            isNewToken ? handleLogout() : handleLogin()
          }
          className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase"
        >
          {isNewToken ? "Logout" : "Login"}
        </button>
        </div>
        
      </div>
    </header>

    </>
    
    // <div className="relative w-full bg-[#00ADBB]">
      

    //   <div className="container ">
    //     <div className=" py-[1rem]  flex justify-end items-center z-50">
            
    //           <Button label={"Logout"} className="z-40" onClick={()=>handleLogout()} />
    //           </div>
         
    //     </div>
    // </div>
  );
};

// export default Navbar;

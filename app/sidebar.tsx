'use client';

import { deleteCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

interface MenuItem {
  title: string;
  url: string;
  // show: boolean;
}

const sidebarData : MenuItem[] =[
  {
    title: "Dashboard",
    url: "/",

  },
  // {
  //   title: "Login",
  //   url: "/login",
  //   show: token?false:true
  // },
  // {
  //   title: "Signup",
  //   url: "/signup",
  //   show: token?false:true
  // }
];

const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();
  // const istoken = getCookie('token');
  // const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  // const [token, setToken] = React.useState<string | undefined>(undefined);

  // Function to check auth and update token state
  // const checkAuth = () => {
  //   const tokenValue = getCookie('token')?.toString();
  //   setToken(tokenValue);
  //   setIsAuthenticated(!!tokenValue);
  // };



  // React.useEffect(() => {
  //   checkAuth();
  // }, []);

  // const menuItems = useMemo(() => {
  //   return sidebarData({
  //     token: istoken,
  //   });
  // }, [istoken]);

  // const MenuList = useMemo(() => {
  //   return menuItems?.filter((navItems) => navItems.show)
  // }, [menuItems])

  // const menuItems = sidebarData({ token });


  // const handleLogout = () => {
  //   deleteCookie('token');
  //   router.push("/login");
  // };

  return (
    <div className={`inline text-left text-sm h-screen w-[25%] border-t-2 border-[#DEDEDE]  bg-[#00ADBB] pt-4 `}>



 
            


                    <Link
                    href={'/'}
                    className={`sidebarButton flex items-center p-4 mt-[1rem] ${path==='/'?"bg-[#008290]":""}`}
                  >

                    <p className={`paragraph_re text-[1rem] capitalize ${path==='/'?"text-light_yellow":"text-dark_green"}`}>Dashboard</p>
                  </Link>

                  
                </div>



     
  

  );
};

export default Sidebar;
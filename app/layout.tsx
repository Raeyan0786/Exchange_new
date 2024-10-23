import React, { Suspense } from "react";
// import Head from 'next/head';
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import Sidebar from "./sidebar";
import { Navbar } from "@/components";
// import { RoleProvider } from '@/service/RoleContext/RoleContect';
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "NerdMine",
  description: "nerdmine description",
  icons: {
    icon: "/nerdmine_logo.png",
  },
};
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} font-sans`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader color="#13484E" />
        <Toaster position="top-right" />
        {/* <SidebarProvider> */}
        {/* <AppSidebar /> */}
        {/* <main>
        <SidebarTrigger />
        {children}
      </main> */}
        {/* </SidebarProvider> */}

        <div className="bg-[#F9F9F9]">
          <div className="container">
          
            <div
              className={`w-full flex flex-col md:flex-row justify-center"}`}
            >

              <Sidebar />

              <div className={`flex w-full lg:w-[75%] flex-col"} `}>
              {children}
              </div>
            </div>
            
          </div>
        </div>
      </body>
    </html>
  );
}

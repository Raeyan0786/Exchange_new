"use client";
import React, { useState, useEffect, useMemo } from "react";
// import { setCookie, getCookie } from 'cookies-next';
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@/components";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";

// import '../../../../app/globals.css'

const validationSchema = yup.object().shape({

  email: yup
    .string()
    .required("Enter your Email"),
    // .matches(/^[A-Za-z\s'-]+$/, "Name must contain only alphabetic characters and special characters like hyphens, apostrophes, or spaces"),
  password: yup.string().required("enter"),
});

// export type ExChangeType={
//   exchange_id:string,
//   name:string,
//   icon:string
// }

interface Exchange {
  exchange_id: string;
  name: string;
  website: string;
  volume_1day_usd: number;
}


export interface ExChangeType {
  exchange_id: string;
  website: string;
  name: string;
  data_quote_start: string;
  data_quote_end: string;
  data_orderbook_start: string;
  data_orderbook_end: string;
  data_trade_start: string;
  data_trade_end: string;
  data_symbols_count: number;
  volume_1hrs_usd: number;
  volume_1day_usd: number;
  volume_1mth_usd: number;
  metric_id?: string[];
}

export interface Icon {
  exchange_id: string;
  url: string;
}

export interface CombinedExchangeData {
  exchange_id: string;
  name: string;
  icon: string | null;
  website: string;
  volume_1day_usd: number;
}

const LoginForm = () => {
  const router = useRouter();
  const { login, error, resetError } = useAuth();


  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleLogin =async (data: any,e: React.FormEvent) => {
    e.preventDefault();
      const formData = {
        ...data
      };
      try {
        await login(formData);
        toast.success("Login in successfully")
        router.push("/")
        // Redirect or handle successful login
      } catch (error) {
        // Error is already handled by useAuth hook
        console.error('Login failed:', error);
      }
      // login(data.username,data.password)
    
  };


  return (
    <>


    
    <form
      className="w-[70%] flex flex-col mx-auto lg:mt-6 mt-3"
      onSubmit={handleSubmit(handleLogin)}
    >
      

      <div className="flex flex-col ">

          <div className="flex flex-col mt-5">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="email"
                  inputClassName="placeholder-Full Name text-[#696767] w-[90%] pl-[0.5rem] mx-auto mb-8 text- focus:border-primary peer block lg:h-[3.7372rem] h-[3rem] sm:w-full lg:w-[25rem] xl:w-[28rem] sm:mb-0 appearance-none rounded-[10px] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                  placeholder="Email"
                  type="text"
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            <div style={{}}>
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email.message}</span>
              )}
            </div>
          </div>
      </div>

      <div className="flex flex-col "></div>

        <div className="flex flex-col mt-5 ">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="contact_no"
                inputClassName="placeholder-Full relative Name text-[#696767] w-[90%]  mx-auto mb-8 text- focus:border-primary peer block  lg:h-[3.7372rem] h-[3rem] sm:w-full lg:w-[25rem] xl:w-[28rem] sm:mb-0 appearance-none rounded-[10px] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 text-sm focus:outline-none focus:ring-0"
                placeholder="Password"
                type="password"
                onChange={(e) => field.onChange(e.target.value)}
                position={"sm:right-24 right-10"}
              />
            )}
          />
          <div style={{}}>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
        </div>
      <div className="flex justify-center">
        <Button
          label="Login"
          type="submit"
          className="mt-6 lg:w-[28rem] w-full sm:w-full mx-[10px] sm:mx-0"
        />
      </div>

      <p className=" flex justify-center mt-5">
        {" "}
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-light_yellow pl-2">
          {" "}
          Register Now
        </Link>
      </p>
    </form>
    </>
  );
};

export default LoginForm;

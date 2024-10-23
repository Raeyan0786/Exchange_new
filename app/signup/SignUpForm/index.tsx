"use client";
import React, { FormEvent, useMemo } from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@/components";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export type SignUpType = {
  firstName: string;
  lastName: string;
  email:string;
  password: string;
  // role?: 'StoreManager' | 'SalesExecutive';
}
const validationSchema = yup.object().shape({
  
  firstName: yup
    .string()
    .required("Enter your Name")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabetic characters"),
    lastName: yup
    .string()
    .required("Enter your Name")
    .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabetic characters"),
  email:yup.
  string()
  .required("Enter your Email")
  .email(),
  password: yup.string().required("enter"),
});

const SignUpForm = () => {
  const router = useRouter();
  const { signup, error, resetError } = useAuth();





  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    getFieldState,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [selectedRole, setSelectedRole] = useState<string>('SalesExecutive');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleSignUp = async(data: any,e:FormEvent) => {
    e.preventDefault();
      const formData = {
        ...data
      };
      try {
        await signup(formData);
        toast.success("Sigin in successfully")
        router.push('/login')
      } catch (error) {
        console.error('Login failed:', error);
      }
    
  };



  

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <div className=" flex flex-col w-[28rem] px-auto sm:px-0 relative">
        
        <div className="flex flex-col mt-5 relative">
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                // id="contact_no"
                inputClassName="placeholder-Full Name text-[#696767]  pl-[0.5rem] mx-auto sm:mx-0 mb-4 sm:mb-8  focus:border-primary peer block lg:h-[2.7372rem] h-[3rem] w-[85%] sm:w-full sm:mb-0 appearance-none rounded-[5px] sm:rounded-[0.3125rem] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                placeholder="First Name"
                type="text"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          <div style={{}} className="absolute -bottom-5">
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            )}
          </div>
        </div>
          
        <div className="flex flex-col mt-5 relative">
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                // id="contact_no"
                inputClassName="placeholder-Full Name text-[#696767]  pl-[0.5rem] mx-auto sm:mx-0 mb-4 sm:mb-8  focus:border-primary peer block lg:h-[2.7372rem] h-[3rem] w-[85%] sm:w-full sm:mb-0 appearance-none rounded-[5px] sm:rounded-[0.3125rem] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                placeholder="Last Name"
                type="text"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          <div style={{}} className="absolute -bottom-5">
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-5 relative">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                // id="contact_no"
                inputClassName="placeholder-Full Name text-[#696767]  pl-[0.5rem] mx-auto sm:mx-0 mb-4 sm:mb-8  focus:border-primary peer block lg:h-[2.7372rem] h-[3rem] w-[85%] sm:w-full sm:mb-0 appearance-none rounded-[5px] sm:rounded-[0.3125rem] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                placeholder="Email"
                type="email"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
            )}
          />
          <div style={{}} className="absolute -bottom-5">
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>
        </div>
        
        <div className="w-full flex flex-col mt-5 ">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                // id="contact_no"
                inputClassName="placeholder-Full Name text-[#696767]  relative pl-[0.5rem] mx-auto sm:mx-0  mb-8 text- focus:border-primary   peer block  lg:h-[2.7372rem] h-[3rem] w-[85%] sm:w-full sm:mb-0 appearance-none rounded-[5px] sm:rounded-[0.3125rem] border-0  border-gray-300  bg-[#F0F0F0] lg:px-2.5 lg:py-2.5 p-1  text-sm  focus:outline-none focus:ring-0"
                placeholder="Password"
                type="password"
                onChange={(e) => field.onChange(e.target.value)}
                position={"sm:right-5 right-10 top-3"}
              />
            )}
          />
          <div style={{}}>
            {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </div>
        </div>


        <div className="w-full sm:w-full flex justify-center">
          <Button
            label="SignUp"
            type="submit"
            className="mt-6 sm:w-full w-[85%] mx-auto sm:mx-0 "
          />
        </div>
      </div>

      
    </form>
  );
};

export default SignUpForm;

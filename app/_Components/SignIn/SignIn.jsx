"use client";

import React, { useState } from "react";
import { Button, Card, ConfigProvider } from "antd";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import Link from "next/link";
import { Checkbox } from "antd";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-32 pb-16">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-[#97C6EA] text-center">
          Sign in to your account
        </h1>
        <ConfigProvider
          theme={{
            components: {
              Checkbox: {
                colorText: "rgb(255,255,255)",
              },
            },
          }}
        >
          <div className="flex flex-col md:flex-row lg:flex-row justify-center items-stretch  mt-16 lg:mt-40 gap-5 p-2">
            <div className="">
              <div className="border-t border-b border-l rounded-3xl p-5 lg:w-96 h-full lg:pr-10">
                <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-transparent text-white p-2 focus:outline-none"
                  />
                  <IoMailOpenOutline className="text-white" />
                </div>
                <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent text-white p-2 focus:outline-none"
                  />
                  <IoIosLock className="text-white" />
                </div>
                <div className="flex justify-between items-center  mb-20">
                  <Checkbox className="text-white">Remember me</Checkbox>
                  <Link
                    href="/forfet-password"
                    className="text-[#A3D3F9] underline"
                  >
                    Forgot Password?{" "}
                  </Link>
                </div>
                <button
                  onClick={() => {}}
                  className="btn text-center w-full bg-[#A3D3F9] p-2 rounded-2xl text-black font-bold text-2xl"
                >
                  Sign In
                </button>
                <p className="text-center my-4">
                  Don’t have an account ?
                  <span>
                    <Link href="/signup" className="text-[#A3D3F9] underline">
                      Sign up
                    </Link>
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="lg:-ml-10 object-cover">
              <Image
                src="/logo (1).png"
                alt="logo"
                height={400}
                width={400}
              ></Image>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}

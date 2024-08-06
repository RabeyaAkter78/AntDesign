"use client";

import React, { useState } from "react";
import { Card, Space } from "antd";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import Link from "next/link";
import { Checkbox } from "antd";
import Image from "next/image";

export default function SignIn() {
  const CheckboxGroup = Checkbox.Group;
  const plainOptions = ["Remember Me"];
  const defaultCheckedList = ["Remember Me"];
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-32 pb-16">
        <h1 className="font-bold text-5xl text-[#97C6EA] text-center">
          Sign in to your account
        </h1>
        <div className="flex justify-center items-center mt-40">
          <div className="mr-96">
            <Space direction="vertical" size={16}>
              <Card
                style={{
                  width: 500,
                  height: 400,
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50px",
                  paddingRight: "100px",
                  paddingLeft: "20px",
                  paddingTop: "20px",
                }}
              >
                <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                  <p>Email</p>
                  <IoMailOpenOutline />
                </div>
                <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                  <p>Password</p>
                  <IoIosLock />
                </div>
                <div className="flex justify-between items-center  mb-20">
                  <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={onChange}
                    className="text-white"
                  />
                  <Link href="" className="text-[#A3D3F9] underline">
                    Forgot Password?{" "}
                  </Link>
                </div>
                <div className="text-center btn bg-[#A3D3F9] p-2 rounded-2xl text-black font-bold text-2xl">
                  Sign In
                </div>
                <p className="text-center my-4">
                  Don’t have an account ?
                  <span>
                    <Link href="" className="text-[#A3D3F9] underline">
                      Sign up
                    </Link>
                  </span>{" "}
                </p>
              </Card>
            </Space>
          </div>
          <div className=" absolute ml-96">
            <Image src="/logo (1).png" alt="" height={200} width={400}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

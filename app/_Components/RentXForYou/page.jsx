import React from "react";
import { Button, Flex } from "antd";
import Image from "next/image";
import { FaPlaneUp } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { LuShoppingBag } from "react-icons/lu";
import Link from "next/link";
import { Col, Row } from "antd";
export default function RentXForYou() {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-32 ">
        <h1 className="font-bold text-5xl text-[#97C6EA] text-center my-10">
          RentX For you
        </h1>
        {/* <Row>
          <Col span={8}>
            <div className="flex justify-center items-center gap-2 text-center btn px-20 py-2 rounded-2xl font-bold bg-[#121212] shadow-inner shadow-slate-500 text-[#97C6EA] hover:text-black hover:bg-[#A3D3F9] ">
              <FaPlaneUp />
              <Link href="">Travel</Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="flex justify-center items-center gap-2 text-center btn px-20 py-2 rounded-2xl font-bold bg-[#121212] shadow-inner shadow-slate-500 text-[#97C6EA] hover:text-black hover:bg-[#A3D3F9] ">
              <ImSpoonKnife />
              <Link href="/">Dining</Link>
            </div>
          </Col>
          <Col span={8}>
            {" "}
            <div className="flex justify-center items-center gap-2 text-center btn px-20 py-2 rounded-2xl font-bold bg-[#121212] shadow-inner shadow-slate-500 text-[#97C6EA] hover:text-black hover:bg-[#A3D3F9] ">
              <LuShoppingBag />
              <Link href="/">Shopping</Link>
            </div>
          </Col>
        </Row> */}

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 justify-center items-center">
          <div className="flex justify-center items-center gap-2 text-center btn px-20 py-2 rounded-2xl font-bold bg-[#121212] shadow-inner shadow-slate-500 text-[#97C6EA] hover:text-black hover:bg-[#A3D3F9] ">
            <FaPlaneUp />
            <Link href="">Travel</Link>
          </div>
          <div className="flex justify-center items-center gap-2 text-center btn px-20 py-2 rounded-2xl font-bold bg-[#121212] shadow-inner shadow-slate-500 text-[#97C6EA] hover:text-black hover:bg-[#A3D3F9] ">
            <ImSpoonKnife />
            <Link href="/">Dining</Link>
          </div>
          <div className="flex justify-center items-center gap-2 text-center btn px-20 py-2 rounded-2xl font-bold bg-[#121212] shadow-inner shadow-slate-500 text-[#97C6EA] hover:text-black hover:bg-[#A3D3F9] ">
            <LuShoppingBag />
            <Link href="/">Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

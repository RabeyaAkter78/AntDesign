import { Card, Space } from "antd";
import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";

export default function ForgotPassword() {
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-32 pb-16">
        <div className="flex justify-center items-center">
          <Space direction="vertical" size={16}>
            <Card
              style={{
                width: 500,
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                borderRadius: "50px",
              }}
            >
              <div className="mb-20">
                <h1 className="font-bold text-xl mb-5">Forgot Password ?</h1>
                <p>
                  Enter your details below to request an your capture award
                  account password reset.
                </p>
              </div>
              <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                <p>Email</p>
                <IoMailOpenOutline />
              </div>

              <div className="text-center btn bg-[#A3D3F9] p-2 text-black font-bold text-2xl">
                Submit
              </div>
            </Card>
          </Space>
        </div>
        <div className="flex justify-center items-center mt-40 "></div>
      </div>
    </div>
  );
}

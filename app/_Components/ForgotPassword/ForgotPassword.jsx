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
                width: 600,
                height: 400,
                backgroundColor: "black",
                color: "white",
                padding: "50px 80px 50px 80px",
                borderRadius: "10px",
              }}
            >
              <div className="mb-10">
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
      </div>
    </div>
  );
}

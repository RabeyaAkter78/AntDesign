"use client";
import { Card, Space } from "antd";
import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function Verification() {
  const [otp, setOtp] = useState("");
  return (
    <div className="bg-black">
      <div className="container mx-auto py-20">
        <div className="flex justify-center items-center">
          <Space direction="vertical" size={16}>
            <Card
              style={{
                width: 600,
                height: 500,
                backgroundColor: "black",
                color: "white",
                padding: "50px 80px 50px 80px",
                borderRadius: "10px",
              }}
            >
              <div>
                <h1 className="font-bold text-2xl mb-10 text-center">
                  Enter Verification Code
                </h1>
              </div>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="w-10"> </span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="w-10 h-12 bg-transparent border-b-2 border-white text-white text-center text-xl focus:outline-none focus:border-blue-400 mx-2"
                  />
                )}
              />
              <p className="my-5">
                If you didn’t receive a code.
                <span className="underline text-[#A3D3F9]"> Resend</span>
              </p>
              <div className="text-center btn bg-[#A3D3F9] p-2 text-black font-bold text-2xl">
                Send
              </div>
            </Card>
          </Space>
        </div>
      </div>
    </div>
  );
}

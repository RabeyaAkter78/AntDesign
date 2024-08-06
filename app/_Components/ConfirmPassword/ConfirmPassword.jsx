import { Card, Space } from "antd";
import React from "react";
import { IoIosLock } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";

export default function ConfirmPassword() {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-20">
        <div className="flex justify-center items-center">
          <Space direction="vertical" size={16}>
            <Card
              style={{
                width: 600,
                height: 300,
                backgroundColor: "black",
                color: "white",
                padding: "50px 80px 50px 80px",
                borderRadius: "10px",
              }}
            >
              <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                <p>Enter Your password</p>
                <IoIosLock />
              </div>
              <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                <p>Confirm new password</p>
                <IoIosLock />
              </div>

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

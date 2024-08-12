"use client";

import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-32 pb-16">
        <h1 className="font-bold text-5xl text-[#97C6EA] text-center">
          Sign in to your account
        </h1>
        <div>
          <form>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-16 lg:mt-40">
              <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-transparent text-white p-2 "
                />
                <IoMailOpenOutline className="text-white " />
              </div>
              <div className="flex justify-between items-center border-b-2 border-[#A3D3F9] mb-10">
                <input type="text" placeholder="Email" />
                <IoIosLock />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

{
  /* <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center mt-16 lg:mt-40 ">
<ConfigProvider
  theme={{
    token: {
      // Seed Token
      colorPrimary: "#00b96b",
      borderRadius: 2,

      // Alias Token
      colorBgContainer: "#f6ffed",
    },

    components: {
      Form: {
        labelColor: "rgba(252,250,250,0.88)",
        labelRequiredMarkColor: "rgb(255,255,255)",
        colorError: "rgb(242,11,15)",
        colorText: "rgb(255,255,255)",
        colorTextDescription: "rgb(255,255,255)",
        inlineItemMarginBottom: 0,
      },
    },
  }}
>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      color: "white",
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
</ConfigProvider>
</div> */
}

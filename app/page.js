import Image from "next/image";
import { Button } from "antd";
import SignIn from "./_Components/SignIn/SignIn";
import SignUp from "./_Components/SignUp/SignUp";
import ForgotPassword from "./_Components/ForgotPassword/ForgotPassword";
import ConfirmPassword from "./_Components/ConfirmPassword/ConfirmPassword";
import Verification from "./_Components/Verification/Verification";
export default function Home() {
  return (
    <main>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <ForgotPassword></ForgotPassword>
      <Verification></Verification>
      <ConfirmPassword></ConfirmPassword>
    </main>
  );
}

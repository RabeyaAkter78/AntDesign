import Image from "next/image";
import { Button } from "antd";
import SignIn from "./_Components/SignIn/SignIn";
import SignUp from "./_Components/SignUp/SignUp";
import ForgotPassword from "./_Components/ForgotPassword/ForgotPassword";
import ConfirmPassword from "./_Components/ConfirmPassword/ConfirmPassword";
import Verification from "./_Components/Verification/Verification";
import RentXForYou from "./_Components/RentXForYou/page";
import TravelCOmponent from "./_Components/TravelComponent/page";
import Shopping from "./_Components/Shopping/page";
import Dining from "./_Components/Dining/page";
import Login from "./_Components/Login/Login";
export default function Home() {
  return (
    <main>
      {/* <Login></Login> */}

      <SignIn></SignIn>

      {/* <SignUp></SignUp> */}
      {/* <ForgotPassword></ForgotPassword>
      <Verification></Verification>
      <ConfirmPassword></ConfirmPassword>
      <RentXForYou></RentXForYou>
      <TravelCOmponent></TravelCOmponent>
      <Dining></Dining>
      <Shopping></Shopping> */}
    </main>
  );
}

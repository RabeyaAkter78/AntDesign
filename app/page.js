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
export default function Home() {
  return (
    <main>
      <SignUp></SignUp>
      <ForgotPassword></ForgotPassword>
      <Verification></Verification>
      <ConfirmPassword></ConfirmPassword>
      <SignIn></SignIn>
      <RentXForYou></RentXForYou>
      <TravelCOmponent></TravelCOmponent>
      <Dining></Dining>
      <Shopping></Shopping>
    </main>
  );
}

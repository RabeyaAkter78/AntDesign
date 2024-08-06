import Image from "next/image";
import { Button } from "antd";
import SignIn from "./_Components/SignIn/SignIn";
import SignUp from "./_Components/SignUp/SignUp";
export default function Home() {
  return (
    <main>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </main>
  );
}

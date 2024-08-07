import React from "react";
import img4 from "../../../public/4.png";
import Image from "next/image";
export default function Shopping() {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-col lg:flex-row gap-5 py-20">
          <div className="lg:w-9/12 text-white p-5">
            <div>
              <h2 className="font-bold text-3xl mb-10">
                SHOP WITH RENTX. POINTS AT DARAZ.COM
              </h2>
              <p className="mb-32">
                Use your points at daraz.com to cover all or part of your
                purchases.
              </p>
            </div>
            <button className="text-center bg-[#A3D3F9] py-2 px-4 rounded-2xl text-black font-bold text-2xl shadow-inner shadow-neutral-500">
              EXPLORE REWARDS
            </button>
          </div>
          <div className="lg:w-3/12 text-white p-5">
            <Image src={img4} alt="" width={1000} height={300}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import img1 from "../../../public/1.png";
import img2 from "../../../public/2.png";
import img3 from "../../../public/3.png";
import Image from "next/image";
import img4 from "../../../public/4.png";
export default function TravelCOmponent() {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-col lg:flex-row gap-5 py-20">
          <div className="lg:w-9/12 text-white p-5">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl my-5">
                BOOK YOUR NEXT TRIP WITH RENTX. POINTS
              </h2>
              <p>
                Redeem points on the RentX. Travel Portal for even more value on
                travel with hundreds of airlines, hotels, car rentals and
                activities.
              </p>
              <h4 className="font-bold text-[#97C6EA] text-2xl md:text-3xl my-5">
                Transfer Partners
              </h4>
              <p>
                Or transfer points 1:1 to some of the world’s top airline and
                hotel loyalty programs..
              </p>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-between items-center my-10">
                <Image src={img1} alt="" width={500} height={500}></Image>
                <Image src={img2} alt="" width={500} height={500}></Image>
                <Image src={img3} alt="" width={100} height={500}></Image>
              </div>
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

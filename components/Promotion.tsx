import React from "react";
import Image from "next/image";


export default function Promotion() {
  return (
    <div className="w-full bg-[#ffff] space-y-10 flex-wrap lg:flex-nowrap">
      <div className="flex flex-col justify-center items-center space-y-5">
        <p className="text-sm font-semibold text-blue-600 pt-10">PROMOTIONS</p>

        <div className="text-4xl font-semibold text-black">
          Our Promotions Events
        </div>
      </div>
      <div className="w-full container mx-auto pb-5 flex flex-wrap space-x-2 lg:flex-nowrap">
       <div className="w-full lg:w-8/12 px-8">
        <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center bg-[#D6D6D8] px-10">
            <div className="flex flex-col">
                <h2 className="text-3xl font-bold text-black">GET UP TO 60%</h2>
                <h5 className="text-black">For the summer season</h5>
            </div>
            <div className="w-60">
                <Image
                src='/images/event1.png'
                alt="feature"
                width={500}
                height={500}
                />
            </div>
        </div>

        <div className="flex justify-center items-center bg-[#212121] p-7 text-white">
            <div className="flex flex-col justify-center items-center space-y-3">
                <h2 className="text-3xl font-bold">GET 30% Off</h2>
                <div className="space-y-1">
                <h5 className="flex justify-center">USE PROMO CODE</h5>
               <div className="bg-[#474747] rounded-full px-10 text-white font-semibold text-lg text-justify">
                <button className="py-1 ">DINEWEEKEND SALE</button>
                </div> 
                </div>
            </div>
            
        </div>
        </div>
       </div>
       {/* <div className="w-full lg:w-7/12 space-x-4 flex flex-wrap lg:flex-nowrap"> */}
       
       <div className="w-full lg:w-2/12 ">
        <div className="bg-[#EFE1C7] text-gray-700">
            <div className="flex flex-col p-1">
                <p>Flex Sweatshirt</p>
                <div className="flex gap-2">
                <p>$100.00</p>
                <p className="font-semibold">$75.00</p>
                </div>
            </div>
            <div className="flex justify-center">
                <Image
                src='/images/event2.png'
                alt="feature"
                width={500}
                height={500}
                className="w-60"
                />
            </div>
        </div>
       </div>
       <div className="w-full lg:w-2/12 ">
       <div className="bg-[#D7D7D9] text-gray-700 ">
            <div className="flex flex-col px-1">
                <p>Flex Push Button Bomber</p>
                <div className="flex gap-2">
                <p>$1225.00</p>
                <p className="font-semibold">$190.00</p>
                </div>
            </div>
            <div className="flex justify-center">
                <Image
                src='/images/event3.png'
                alt="feature"
                width={500}
                height={500}
                className="w-60"
                />
            </div>
        </div>
       </div>
       {/* </div> */}
      </div>
    </div>
  );
}

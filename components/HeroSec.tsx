import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";


export default function HeroSec() {
  return (
    <div className="bg-[#ffff]">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6  lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
        <span className="mx-1 text-[#0000ff] rounded-xl font-semibold p-3 bg-blue-100">Sale 70%</span>
          <div className="lg:max-w-lg py-10">
            <h1 className="text-5xl font-bold text-[#212121] lg:text-5xl">
            An Industrial Take on Streetwear
            </h1>

            <div className="mt-8 space-y-10">
              <p className="flex items-center -mx-2 text-gray-800 ">
                <span className="mx-2">Anyone can beat you but no one can beat your outfit as long as you 
                wear Dine outfits.</span>
              </p>
            </div>
          </div>

          <div className=" mt-8 lg:max-w-xs dark:border-gray-700 focus-within:border-blue-400 
          focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 
          focus-within:ring-opacity-40 ">
            
              <div className="w-full flex justify-center gap-3 font-semibold py-4 
               text-white transition-colors duration-200 transform bg-black hover:bg-blue-400 
               focus:outline-none focus:bg-blue-400">
              <FiShoppingCart className="w-8 h-8 flex justify-center items-center text-white cursor-pointer"/>
              <button
                type="button"
                className="text-xl"
              >
                Start Shopping
              </button>
              </div>
              <div className="grid w-full pt-24  ">
                <div className="grid grid-cols-2 lg:grid gap-20">
                
            <Image 
            src='/images/featured1.png'
            alt="feature"
            width={500}
            height={500}
            // className="w-44"
            />
            
             <Image 
            src='/images/Featured2.png'
            alt="feature"
            width={500}
            height={500}
            />
             <Image 
            src='/images/Featured3.png'
            alt="feature"
            width={500}
            height={500}
            />
             <Image 
            src='/images/Featured4.png'
            alt="feature"
            width={500}
            height={500}
            />
            </div>
          </div>
          </div>
          
        </div>

        <div className="flex items-center justify-center w-full h-full lg:w-1/2">
            <div className="relative bg-[#FFECE3] lg:p-72 mr-14 rounded-full"></div>
          <img
            className="absolute object-cover mx-auto rounded-md hidden lg:inline-block "
            src="/images/header.png"
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
}

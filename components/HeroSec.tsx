import React from "react";

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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg> */}

                <span className="mx-2">Anyone can beat you but no one can beat your outfit as long as you wear 
                Dine outfits.Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</span>
              </p>

              {/* <p className="flex items-center -mx-2 text-gray-700 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Just Copy Paste Codeing</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-700 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easy to Use</span>
              </p> */}
            </div>
          </div>

          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none  focus:outline-none focus:placeholder-transparent focus:ring-0"
              />

              <button
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
}

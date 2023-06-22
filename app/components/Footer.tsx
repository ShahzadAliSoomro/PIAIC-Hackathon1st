import React from "react";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-[#ffff] ">
      <footer className="pt-24">
        <div className="w-full px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 container">
            <div className="space-y-10">
              <Image
                src="/images/Logo.webp"
                className="mr-5 h-6 sm:h-9"
                alt="logo"
              />
              <p className=" text-lg text-gray-500">
                Small, artisan label that offers a thoughtfully curated
                collection of high quality everyday essentials made.
              </p>
              <div className="flex gap-8  text-black">
                <div className="bg-[#F1F1F1] p-2 rounded-lg">
                  <AiOutlineTwitter className="w-8 h-8" />
                </div>
                <div className="bg-[#F1F1F1] p-2 rounded-lg">
                  <FaFacebookF className="w-8 h-8" />
                </div>
                <div className="bg-[#F1F1F1] p-2 rounded-lg">
                  <svg
                    stroke="currentColor"
                    className="w-8 h-8"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-16 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-extrabold text-xl text-gray-500">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                  <a className="hover:opacity-75"> About </a>
                  <a className="hover:opacity-75"> Terms of Use </a>
                  <a className="hover:opacity-75"> Privacy Policy </a>
                  <a className="hover:opacity-75"> How it Works </a>
                  <a className="hover:opacity-75"> Contact Us </a>
                </nav>
              </div>
              <div>
                <p className="font-extrabold text-xl text-gray-500">Support</p>
                <nav className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                  <a className="hover:opacity-75"> Support Carrer </a>
                  <a className="hover:opacity-75"> 24h Service </a>
                  <a className="hover:opacity-75"> Quick </a>
                </nav>
              </div>
              <div>
                <p className="font-extrabold text-xl text-gray-500">Contact</p>
                <nav className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                  <a className="hover:opacity-75"> Whatsapp </a>
                  <a className="hover:opacity-75"> Support 24h </a>
                </nav>
              </div>
            </div>
          </div>

          <div className="w-full border-b pt-10 border-black"></div>
          <div className="flex container justify-between space-y-4 lg:space-y-0 pt-5 flex-wrap lg:flex-nowrap">
            <p className=" text-lg text-gray-800">
              Copyright © 2023 Dine Market
            </p>
            <p className=" text-lg text-gray-800">
              Design by.{" "}
              <a href="#" className="font-bold text-black">
                Weird Design Studio
              </a>
            </p>
            <p className=" text-lg text-gray-800">
              Code by.
              <a
                href="https://github.com/ShahzadAliSoomro/PIAIC-Hackathon1st"
                className="font-bold text-black"
              >
                ShahzadAliSoomro on github
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

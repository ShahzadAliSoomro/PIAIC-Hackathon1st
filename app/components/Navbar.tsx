"use client";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { TbNumber0 } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    
      <nav className="bg-[#FFFFFF] ">
        <div className=" container flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <Image
              src="/images/Logo.webp"
              className="h-8 mr-3 bg-white"
              alt=" Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap"></span> */}
          </a>
          <div className="flex md:order-2">
            <button

              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 
              dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 
              dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only text-sm">Search icon</span>
              </div>
              <div className="flex justify-between space-x-60">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full px-24 pl-8 -py-4 text-gray-800 border border-gray-300 
                  rounded-lg dark:border-gray-200 dark:placeholder-gray-400 text-sm 
                  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="What you looking for"
                />
                <div className="bg-[#F1F1F1] rounded-full p-3 ">
                <FiShoppingCart className="w-4 h-4 relative text-gray-800 cursor-pointer" />
                 <TbNumber0 className="w-3 h-3 absolute text-white bg-red-500 rounded-full top-1 right-1 cursor-pointer"/>
              </div>
              </div>
            </div>
            <button
            onClick={() => setOpen(!open)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex z-30 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden 
              hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 
                rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#FFFFFF] 
            md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  href="/female"
                  className="block py-2 pl-3 pr-4 text-gray-800  rounded md:bg-transparent md:p-0 "
                  aria-current="page"
                >
               Female
                </Link>
              </li>
              <li>
                <Link
                  href="/male"
                  className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 
                  md:hover:bg-transparent  md:p-0  "
                >
                  Male
                </Link>
              </li>
              <li>
                <a
                  href="/layout"
                  className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 
                  md:hover:bg-transparent  md:p-0  "
                >
                  Kids
                </a>
              </li>
              <li>
                <Link
                  href="/allproduct"
                  className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 
                  md:hover:bg-transparent  md:p-0  "
                >
                  All Products
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
        {open && (
        <div className="absolute top-0 inset-x-0 z-20 p-2 transition transform origin-top-right md:hidden">
          <ul className="flex min-h-screen justify-center items-center flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#FFFFFF] 
          md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/female"
                className="block py-2 pl-3 pr-4 text-gray-800  rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
             Female
              </Link>
            </li>
            <li>
              <Link
                href="/male"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 
                md:hover:bg-transparent  md:p-0  "
              >
                Male
              </Link>
            </li>
            <li>
              <a
                href="/layout"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 
                md:hover:bg-transparent  md:p-0  "
              >
                Kids
              </a>
            </li>
            <li>
              <Link
                href="/allproduct"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 
                md:hover:bg-transparent  md:p-0  "
              >
                All Products
              </Link>
            </li>
          </ul>
          </div>
        )}
      </nav>
    
  );
}

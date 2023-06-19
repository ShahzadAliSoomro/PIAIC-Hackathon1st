"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function Female() {
  const [card, setCard] = useState(false);

  const CardArray = [
    {
      id: 1,
      image: "/images/product1.png",
      mantitle: "Brushed Raglan Sweatshirt",
      title: "Sweater",
      price: "$195"
    },
    {
      id: 2,
      image: "/images/product2.png",
      mantitle: "Cameryn Sash Tie Dress",
      title: "Dress",
      price: "$545"
    },
    {
      id: 3,
      image: "/images/product3.png",
      mantitle: "Flex Sweatshirt",
      title: "Sweater",
      price: "$175"
    },
    {
      id: 4,
      image: "/images/fmale4.png",
      mantitle: "Flex Sweatpants",
      title: "Pants",
      price: "$175"
    },
    {
      id: 5,
      image: "/images/fmale5.png",
      mantitle: "Pink Fleece Sweatpants",
      title: "Pants",
      price: "$195"
    },
    {
      id: 6,
      image: "/images/fmale6.png",
      mantitle: "Lite Sweatpants",
      title: "Pants",
      price: "$150"
    },
    {
      id: 7,
      image: "/images/fmale7.png",
      mantitle: "Imperial Alpaca Hoodie",
      title: "Jackets",
      price: "$525"
    },
    {
      id: 8,
      image: "/images/fmale8.png",
      mantitle: "Muscle Tank",
      title: "T Shirts",
      price: "$75"
    },
    {
      id: 9,
      image: "/images/fmale9.png",
      mantitle: "Brushed Bomber",
      title: "Jackets",
      price: "$225"
    },
  ];


  return (
    <div>
      <div className="bg-[#FFFFFF]">
        {/* <header>
          <h1 className="bg-white py-4 text-center">
            <a
              href="/"
              className="text-xl font-bold text-gray-700 cursor-pointer"
            />
            BUSINESS MODEL CANVAS
          </h1>

          
        </header> */}
        <section className="min-h-screen body-font text-gray-600 ">
          <div className="container mx-auto px-5 py-10">
            <div className="-m-4 flex flex-wrap ">
              {CardArray.map((card) => (
                <div className="w-full p-4 md:w-1/2 lg:w-1/4 px-5 lg:px-16 ">
                <a className="relative block overflow-hidden rounded ">
                  <Image
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src={card.image}
                    width={421}
                    height={261}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font text-lg font-bold text-gray-900 ">
                    {card.mantitle}
                  </h3>
                  <h2 className="title-font mb-1 text-base font-bold tracking-widest text-gray-400">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-lg font-bold text-gray-900">{card.price}</p>
                </div>
              </div>
              ))}
              
              {/* <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/421x261"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    PROJECT
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/421x261"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    PROJECT
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/421x261"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    PROJECT
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/421x261"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    PROJECT
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/2 lg:w-1/4">
                <a className="relative block h-48 overflow-hidden rounded">
                  <img
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src="https://dummyimage.com/421x261"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
                    PROJECT
                  </h3>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Shooting Stars
                  </h2>
                  <p className="mt-1">01/09/2022</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

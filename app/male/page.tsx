"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function MalePro() {
  const [card, setCard] = useState(false);

  const CardArray = [
    {
      id: 1,
      image: "/images/allpro8.png",
      mantitle: "Flex Push Button Bomber",
      title: "Jackets",
      price: "$225"
    },
    {
      id: 2,
      image: "/images/allpro11.png",
      mantitle: "Raglan Sweatshirt",
      title: "Sweater",
      price: "$195"
    },
  ];

  return (
    <div>
      <div className="bg-[#FFFFFF]">
        <section className="min-h-screen body-font text-gray-600 ">
          <div className="container mx-auto px-5 py-10">
            <div className="-m-4 flex flex-wrap ">
              {CardArray.map((items) => (
                <div className="w-full p-4 md:w-1/2 lg:w-1/4 px-5 lg:px-16 ">
                <a className="relative block overflow-hidden rounded ">
                  <Image
                    alt="ecommerce"
                    className="block h-full w-full object-cover object-center cursor-pointer"
                    src={items.image}
                    width={421}
                    height={261}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="title-font text-lg font-bold text-gray-900 ">
                    {items.mantitle}
                  </h3>
                  <h2 className="title-font mb-1 text-base font-bold tracking-widest text-gray-400">
                    {items.title}
                  </h2>
                  <p className="mt-1 text-lg font-bold text-gray-900">{items.price}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

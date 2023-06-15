import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full relative p-4">
      <div className=" font-bold flex justify-center">
        <h1 className="text-9xl text-gray-200 absolute top-10 z-10">
          Newsletter
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="space-y-8 z-20">
          <h2 className="text-black text-4xl font-bold">
            Subscribe Our Newsletter
          </h2>
          <p className="text-gray-700 text-lg flex z-20">
            Get the latest information and promo offers directly
          </p>
          <div className="flex gap-2  z-20 ">
            <input
              type="text"
              className="border border-gray-700 p-7 py-0"
              placeholder="input email address"
            />
            <button className="bg-[#212121] text-white p-2 flex justify-center w-32 font-semibold">
              Get Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

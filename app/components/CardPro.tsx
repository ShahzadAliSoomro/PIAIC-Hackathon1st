import React, { useState } from 'react'

export default function CardPro() {
    const [card, setCard] = useState(false);

    const CardArray = [
        {
            id: 1,
            image: "/eziline1.jpeg",
            title: "Business Insurance",
            text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        },
        {
            id: 2,
            image: "/eziline2.jpeg",
            title: "Banking Investigation",
            text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        },
        {
            id: 3,
            image: "/eziline1.jpeg",
            title: "Finance Management", 
            text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        },
        {
            id: 4,
            image: "/eziline2.jpeg",
            title: "Banking Investigation",
            text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
        }
    ]
  return (
    
    <div>
        
<div className=" bg-indigo-50">
  
  <header>
    <h1 className="bg-white py-4 text-center">
    <a href="/" className="text-xl font-bold text-gray-700 cursor-pointer" />BUSINESS MODEL CANVAS</h1>
    
    <nav className="mt-6">
      <ul className="flex justify-center  items-center space-x-4">
        <li><a href="/" className="text-md font-semibold text-gray-600 hover:text-gray-800">Home</a></li>
        <li><a href="/new-project" className="text-md font-semibold text-gray-600 hover:text-gray-800">New Project</a></li>
        <li><a href="/about" className="text-md font-semibold text-gray-600 hover:text-gray-800">About</a></li>
      </ul>
    </nav>
  </header>
  <section className="min-h-screen body-font text-gray-600 ">
    <div className="container mx-auto px-5 py-10">
      <div className="-m-4 flex flex-wrap">
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <a className="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/420x260" />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
            <h2 className="title-font text-lg font-medium text-gray-900">The Catalyzer</h2>
            <p className="mt-1">01/09/2022</p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <a className="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
            <h2 className="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="mt-1">01/09/2022</p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <a className="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
            <h2 className="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="mt-1">01/09/2022</p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <a className="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
            <h2 className="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="mt-1">01/09/2022</p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <a className="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
            <h2 className="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="mt-1">01/09/2022</p>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <a className="relative block h-48 overflow-hidden rounded">
            <img alt="ecommerce" className="block h-full w-full object-cover object-center cursor-pointer" src="https://dummyimage.com/421x261" />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">PROJECT</h3>
            <h2 className="title-font text-lg font-medium text-gray-900">Shooting Stars</h2>
            <p className="mt-1">01/09/2022</p>
          </div>
        </div>
    </div>
    </div>
  </section>
  
  
</div>
    </div>
  )
}

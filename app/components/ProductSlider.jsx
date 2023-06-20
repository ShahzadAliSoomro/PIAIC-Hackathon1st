"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CardData = [
    {
      id: 1,
      image: "/images/product1.png",
      title: "Brushed Raglan Sweatshirt",
      price: "$195"
    },
    {
      id: 2,
      image: "/images/product2.png",
      title: "Cameryn Sash Tie Dress",
      price: "$545"
    },
    {
      id: 3,
      image: "/images/product3.png",
      title: "Flex Sweatshirt",
      price: "$175"
    },
    {
      id: 4,
      image: "/images/fmale4.png",
      title: "Flex Sweatpants",
      price: "$175"
    },
    {
      id: 5,
      image: "/images/fmale5.png",
      title: "Pink Fleece Sweatpants",
      price: "$195"
    },
    {
      id: 6,
      image: "/images/fmale6.png",
      title: "Lite Sweatpants",
      price: "$150"
    },
    {
      id: 7,
      image: "/images/allpro8.png",
      title: "Imperial Alpaca Hoodie",
      price: "$225"
    },
    {
      id: 8,
      image: "/images/allpro11.png",
      title: "Flex Push Button Bomber",
      price: "$225"
    },
    {
      id: 9,
      image: "/images/fmale8.png",
      title: "Muscle Tank",
      price: "$75"
    },
    {
      id: 10,
      image: "/images/fmale9.png",
      title: "Brushed Bomber",
      price: "$225"
    },
    {
      id: 11,
      image: "/images/allpro11.png",
      title: "Raglan Sweatshirt",
      price: "$195"
    },
  ];

const ProductSlider = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center space-y-5 ">
        <p className="text-sm font-semibold text-blue-600 pt-10">PRODUCTS</p>

        <div className="text-2xl lg:text-4xl font-semibold text-black ">
        Check What We Have
        </div>
      </div>
       <Slider {...settings}>
         {CardData.map((data) => (
           <div key={data.id} className="px-10 pt-5">
             
               <div className="w-full border  hover:text-white 
               duration-300 cursor-pointer z-1 hover:bg-blue-800 ">
                <Image
                   className="w-full"
                   src={data.image}
                   alt="Banking Insurance"
                   width={1000}
                   height={1000}
                 />
                
                
               </div>
               <div className="mt-4">
                  
               <h3 className="title-font text-lg font-bold text-gray-900 ">
                    {data.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-gray-900">{data.price}</p>
                </div>
             {/* </div> */}
           </div>
         ))}
       </Slider>
     </div>
    );
  }
  export default ProductSlider



// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import { TfiAngleRight } from "react-icons/tfi";

// const CardData = [
//   {
//     id: 1,
//     image: "/images/BI.png",
//     title: "Business Insurance",
//     text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
//   },
//   {
//     id: 2,
//     image: "/images/FM.png",
//     title: "Banking Investigation",
//     text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
//   },
//   {
//     id: 3,
//     image: "/images/BI.png",
//     title: "Finance Management",
//     text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
//   },
//   {
//     id: 4,
//     image: "/images/FM.png",
//     title: "Banking Investigation",
//     text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
//   },
// ];

// const ProductSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-screen-2xl mx-auto">
//       <Slider {...settings}>
//         {CardData.map((data) => (
//           <div key={data.id} className="px-6">
//             <div className="h-[600px] px-5 relative">
//               <div className="relative rounded-[30px]">
//                 <Image
//                   className="mx-auto rounded-2xl"
//                   src={data.image}
//                   alt="Banking Insurance"
//                   width={150}
//                   height={100}
//                 />
//               </div>
//               <div className="p-6 md:p-12 -mt-[30px] border rounded-3xl hover:text-white duration-300 cursor-pointer z-1 hover:bg-blue-800 ">
//                 <h2 className="text-center text-2xl md:text-4xl font-bold">
//                   {data.title}
//                 </h2>
//                 <span className="text-lg md:text-2xl text-center flex mt-4">
//                   {data.text}
//                 </span>
//                 <div className="mt-6 w-12 h-12 mx-auto bg-blue-700 rounded-xl">
//                   <TfiAngleRight
//                     size={25}
//                     className="mx-auto relative top-[10px] text-white"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ProductSlider;


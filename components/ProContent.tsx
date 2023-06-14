import React from 'react'
import Image from 'next/image'


export default function ProContent() {
  return (
    <div className='w-full bg-[#FBFCFF] relative p-16'> 
    <div className=' flex text-black font-extrabold absolute -top-14 -right-36'>
        <h2 className='text-5xl w-full lg:w-9/12 container mx-auto'>Unique and Authentic Vintage Designer Jewellery</h2>
    </div>
    <div className='bg-[#FBFCFF] container mx-auto'>
        <div className='w-60 font-bold p-10 absolute '>
            <h1 className='text-7xl text-gray-300 '>Different From Others</h1>
        </div>
        <div className='w-full flex '>
            <div className='w-full lg:w-3/12 flex flex-col'>
                <div className='space-y-20'>
                <div className='flex flex-col space-y-4'>
                <h4 className='text-black text-lg font-bold'>Using Good Quality Materials</h4>
                <p className='text-gray-700 w-60 text-lg'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col space-y-4'>
                <h4 className='text-black text-lg font-bold'>Modern Fashion Design</h4>
                <p className='text-gray-700 w-60 text-lg'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>

                </div>
            </div>
            <div className='w-full lg:w-3/12 flex flex-col'>
            <div className='space-y-20'>
                <div className='flex flex-col space-y-4'>
                <h4 className='text-black text-lg font-bold'>100% Handmade Products</h4>
                <p className='text-gray-700 w-60 text-lg'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div className='flex flex-col space-y-4'>
                <h4 className='text-black text-lg font-bold'>Discount for Bulk Orders</h4>
                <p className='text-gray-700 w-60 text-lg'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>

                </div>
            </div>
            <div className='w-full lg:w-6/12 flex'>
                <div className='flex justify-center items-center gap-5'>
                    <div className='w-full'>
                        <Image src="/images/featureunique.png" width={500} height={500} alt='uniqueimage'
                        className=''/>
                    </div>
                    <div className='flex flex-col space-y-7'>
                      <p className='text-gray-700 text-lg text-justify'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care.
                         The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                         <button className='bg-[#212121] text-white p-2 flex justify-center w-64 font-semibold'>See All Product</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

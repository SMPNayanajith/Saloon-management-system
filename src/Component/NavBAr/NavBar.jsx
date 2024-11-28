import React from 'react';
import { IoArrowDownCircleOutline } from "react-icons/io5";

function NavBar() {
  return (
    <div className='overflow-hidden'>
      <div className='overflow-hidden w-full absolute flex justify-center p-2 bg-white bg-opacity-20 z-10'>
        <div className='flex justify-center w-full'>
          <button className='mx-[5px] text-white hover:bg-gray-700 p-2 rounded-md'>Shop</button>
          <button className='mx-[5px] text-white hover:bg-gray-700 p-2 rounded-md'>Home</button>
          <button className='mx-[5px] text-white hover:bg-gray-700 p-2 rounded-md'>Gallery</button>
          <button className='mx-[5px] text-white hover:bg-gray-700 p-2 rounded-md'>About Us</button>
        </div>
        <div className='ml-auto flex'>
          <button className='rounded-2xl whitespace-nowrap w-auto mx-[5px] bg-gray-500 text-white hover:bg-gray-700 p-2'>Sign In</button>
          <button className='mx-[5px] bg-white text-black hover:bg-gray-200 p-2 rounded-2xl'>Contact</button>
        </div>
      </div>

      <div className='relative'>
        <img className='w-screen h-screen object-cover' src="/Images/Home-banner.jpg" alt="Home Banner" />
        
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white'>
          <h1 className='text-6xl font-thin mb-2'>ELEVATE YOUR STYLE</h1>
          <h1 className='text-6xl font-thin mb-2 whitespace-nowrap'>ELEVATE YOUR CONFIDENCE</h1>
          <h1 className='text-md font-mono font-extralight '>EXPERT CARE FOR REGAL LOOK</h1>

          <div className="flex justify-center items-center mt-8 cursor-pointer">
            <IoArrowDownCircleOutline size={30} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

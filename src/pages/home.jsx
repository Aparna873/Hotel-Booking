import React from 'react';
import './home.css';
// import { Card } from '../components/cards';
import Data from '../data.js'
import { Tiles } from '../components/tiles.jsx';
export const Home = () => 
    {
        console.log(Data);
  return (
    <>
    <div className="flex flex-col text-yellow-500">
      <div>
      <h1 className="text-3xl md:text-6xl from-neutral-600 text-center px-4 font-black">
        Find Your Home Away From Home <br />
        Book Your Stay Today
      </h1>
      </div>
      <div className='m-10'>
        <form class="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className='flex flex-row relative w-full'>
            <div class=" w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Hotels..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
            </div>
        </form>
       
            </div>
    </div>
    <Tiles/>
   {/* <Card/> */}
   </>
  );
};


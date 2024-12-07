<<<<<<< HEAD
import Image from 'next/image';
import React from 'react';
const imageUrl = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/17/09/9f/exterior.jpg?w=1200&h=-1&s=1";

const Card = () => {
    return (
=======


"use client"
import React, { useEffect, useState } from 'react';
// import { hotels } from '../../lib/hotels'
import Hotels from '../Cards/Hotels';
import Link from 'next/link';

const Card = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels`);
    const data = await res.json();
    setHotels(data);
  };

  // console.log(hotels)
  return (
>>>>>>> 62d95912185f85f7b39d6159042f107826bc0b9b
    <div>
      <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
        Hotel in Your area
      </h1><br />
<<<<<<< HEAD
        <div className='flex gap-6'>
              
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
  <div className="px-4 py-2">
    {/* <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
      Hotel in Your area
    </h1> */}
    <p className="mt-1 text-sm text-yellow-500">
    Premium logo
    </p>
  </div>
  <img className="object-cover w-52 h-48 mt-2" src={imageUrl} alt=''/>
  
  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 className="text-lg font-bold text-white">$129</h1>
    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
      Add to cart
    </button>
  </div>
</div>
=======
      <div className='flex gap-6'>
        {
          hotels.map((hotel) => (
            <Link key={hotel._id} href={`/hotels/${hotel._id}`}>
              <Hotels hotel={hotel}></Hotels>
            </Link>
          ))
        }
      </div>
    </div>
  );
>>>>>>> 62d95912185f85f7b39d6159042f107826bc0b9b

};

<<<<<<< HEAD





export default Card;
=======
export default Card;


>>>>>>> 62d95912185f85f7b39d6159042f107826bc0b9b

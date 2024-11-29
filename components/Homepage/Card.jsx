

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
    <div>
      <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
        Hotel in Your area
      </h1><br />
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

};

export default Card;



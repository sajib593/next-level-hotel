"use client"
import Hotels from '@/components/Cards/Hotels';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import { hotels } from '../../lib/hotels'
// import Hotels from '../Cards/Hotels';

const Card1 = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels`);
    const data = await res.json();
    setHotels(data);
  };
  console.log(hotels)

    return (
        <div>
      <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white text-center mt-20">
        Hotel in Your area
      </h1><br /> <br />
      <div className='flex gap-6'>


        {/* {
          hotels.map((hotel) => (
            <Hotels key={hotel._id} hotel={hotel}></Hotels>
          ))
        } */}


        {
          hotels.map((hotel) => (

            <Link key={hotel._id} href={`/Card1/${hotel._id}`}>

                    <Hotels  hotel={hotel}></Hotels>
            </Link>
          ))
        }





      </div>
    </div>
    );
};

export default Card1;
"use client"
import React, { useEffect, useState } from 'react';

const DynamicView = ({params}) => {

    

    const {id} = params;

    console.log(id);

    const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hotels`);
    const data = await res.json();
    setHotels(data);
  };
  console.log(hotels);

  const dynamic = hotels.find((hotel)=> hotel._id == id);
  const {name} = dynamic;

    return (
        <div>
            <h1 className='text-center text-3xl'>name {name}</h1>
        </div>
    );
};

export default DynamicView;
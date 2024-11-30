import { getHotelDetail } from '@/lib/getHotelsDetail';
import Image from 'next/image';
import React from 'react';



const HotelDetailPage = async ({ params }) => {
    const details = await getHotelDetail(params.id)
    const { name, location, rating, pricePerNight, imageUrl } = details
    return (
        <div className="p-6">
            <h1 className="text-5xl font-bold text-center">{name}</h1>
            <br></br>
         <div className='flex justify-center'>
         {imageUrl && (
                <Image
                    src={imageUrl} // Use the correct image URL
                    alt={name}
                    width={800}
                    height={200}
                    className="rounded-md"
                />
            )}
         </div>
            <p className="text-gray-600 text-3xl text-center">Location: {location}</p>
            <p className="text-gray-800 text-xl font-bold mt-2 text-center">Price: ${pricePerNight}</p>
            <p className="text-gray-800 text-xl font-bold mt-2 text-center">Rating: {rating}</p>
        </div>
    );
};

export default HotelDetailPage;

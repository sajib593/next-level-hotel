import { getHotelDetail } from '@/lib/getHotelsDetail';
import Image from 'next/image';
import React from 'react';



const HotelDetailPage = async ({ params }) => {
    const details = await getHotelDetail(params.id)
    const { name, location, rating, pricePerNight, imageUrl } = details
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">{name}</h1>
            {imageUrl && (
                <Image
                    src={imageUrl} // Use the correct image URL
                    alt={name}
                    width={400}
                    height={256}
                    className="rounded-md"
                />
            )}
            <p className="text-gray-600">Location: {location}</p>
            <p className="text-gray-800 font-bold mt-2">Price: ${pricePerNight}</p>
        </div>
    );
};

export default HotelDetailPage;

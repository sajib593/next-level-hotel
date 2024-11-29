import Image from 'next/image';
import React from 'react';

const Hotels = ({ hotel }) => {
    return (
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">{hotel.name}</h2>
                <p className="mt-1 text-sm text-yellow-500">{hotel.location}</p>
            </div>
            <Image 
                src={hotel.imageUrl}
                alt={hotel.name}
                width={400}
                height={200}
                className="object-cover h-[200px]"
            />
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white">${hotel.pricePerNight}</h1>
                <button className="px-3 py-3 font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Hotels;
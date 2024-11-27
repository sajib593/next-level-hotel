import React from 'react';
import Image from 'next/image';
import bali from"../../images/Bali.jpg.webp";
import malaysia from"../../images/malaysia.jpeg";
import thailand from"../../images/thailand.jpg";
import srilanka from"../../images/srilanka.jpeg";
import nepal from"../../images/nepal.jpg";

const Countries = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>We have <span className='text-3xl text-green-400'>Branches</span>  in these countries</h1>
            <br />
            <div className="flex justify-center gap-6 p-6">
      {/* bali */}
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg">
          <Image
            src={bali}
            alt="bali"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">Bali</h3>
        <p className="text-sm text-gray-500">Indonesia</p>
      </div>

      {/* Kuala Lumpur */}
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg">
          <Image
            src={malaysia}
            alt="Kuala Lumpur"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">Kuala Lumpur</h3>
        <p className="text-sm text-gray-500">Malaysia</p>
      </div>

      {/* Tokyo */}
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg">
          <Image
            src={thailand}
            alt="Bangkok"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">Bangkok</h3>
        <p className="text-sm text-gray-500">Thailand</p>
      </div>

      {/* srilanka */}
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg">
          <Image
            src={srilanka}
            alt="srilanka"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">Srilanka</h3>
        <p className="text-sm text-gray-500">srilanka</p>
      </div>

      {/* nepal */}
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-lg">
          <Image
            src={nepal}
            alt="Seoul"
            width={112}
            height={112}
            className="object-cover"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">Kathmundu</h3>
        <p className="text-sm text-gray-500">Nepal</p>
      </div>
    </div>
        </div>
    );
};

export default Countries;
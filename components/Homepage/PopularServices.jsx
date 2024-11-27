import Image from 'next/image';
import React from 'react';

const PopularServices = () => {
    return (
        <div className='my-20 bg-[#ecf7ff] max-w-7xl mx-auto bg-'>
            <div className='flex items-center'>
                <Image className='w-1/2 object-cover transform transition-transform duration-500 hover:scale-110 hover:rotate-2' src={`https://i.imgur.com/mNQ9cOY.jpg`} alt='' width={600} height={400} />
                <div className='w-1/2 mx-10 space-y-3 '>
                    <h3 className='text-2xl text-black font-semibold'>Extended Stay Saving</h3>
                    <p className='text-[#666]'>Make the most of your extended travels with our exclusive long-term stay discounts. Enjoy reduced nightly rates, added amenities for your comfort, and the convenience of home-like features, all tailored for a seamless extended stay experience.</p>
                    <button className=" py-2 text-green-700 font-semibold hover:border-b-2 border-green-700 hover:text-green-900 transition-all duration-200">
                        READ MORE
                    </button>
                </div>
            </div>
            <div className='flex flex-row-reverse items-center'>
                <Image className='w-1/2 object-cover transform transition-transform duration-500 hover:scale-110 hover:rotate-2' src={`https://i.imgur.com/y6Oz81A.jpg`} alt='' width={600} height={400} />
                <div className='w-1/2 flex flex-col items-end mx-10 space-y-3'>
                    <h3 className='text-2xl text-black font-semibold'>Benefits of Spa Treatments</h3>
                    <p className='text-[#666] text-right'>Spa treatments provide relaxation, reduce stress, relieve pain and muscle tension, improve blood circulation, enhance skin health, detoxify the body, and boost overall well-being.</p>
                    <button className=" py-2 text-green-700 font-semibold hover:border-b-2 border-green-700 hover:text-green-900 transition-all duration-200">
                        READ MORE
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default PopularServices;
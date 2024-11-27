import Image from 'next/image';
import React from 'react';

const PopularServices = () => {
    return (
        <div className='my-36 max-w-7xl mx-auto border-2'>
            <h2>This is popular services</h2>
            <div className='flex items-center'>
                <Image src={`https://i.imgur.com/mNQ9cOY.jpg`} alt='' width={600} height={400} />
                <div className='space-y-3 ml-10'>
                    <h3 className='text-2xl font-semibold'>Extended Stay Saving</h3>
                    <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru</p>
                    <button className=" py-2 text-green-700 font-medium hover:border-b-2 border-green-700 hover:text-green-900 transition-all duration-200">
                        READ MORE
                    </button>
                </div>
            </div>
            <div className='flex items-center'>
                <Image src={`https://i.imgur.com/mNQ9cOY.jpg`} alt='' width={600} height={400} />
                <div className='space-y-3 ml-10'>
                    <h3 className='text-2xl font-semibold'>Extended Stay Saving</h3>
                    <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru</p>
                    <button className=" py-2 text-green-700 font-medium hover:border-b-2 border-green-700 hover:text-green-900 transition-all duration-200">
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
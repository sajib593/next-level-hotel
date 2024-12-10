import React from 'react';

const gymDetailspage = ({detail}) => {
    const {  _id,planName, price, imageUrl } = detail
    return (
        
            
              <div  className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
      <img
      src={imageUrl}
      alt="car!" 
      width={400}
                height={200}/>
        <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
        {planName}
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
         {price}
        </h2>
        <p className="font-medium text-gray-500 dark:text-gray-300">
        {duration}
        </p>
        <Link href="/gymform">  <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Enroll Now
        </button>
        </Link>
      </div> 
    
        
    );
};

export default gymDetailspage;




// const GymDetailsPage = async ({ detail }) => {
//     // const detail = await getgymCollection(param.id)
//     const {  _id,planName, price, imageUrl } = detail
//     return (
//         <div>
//               <div  className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
//       <img
//       src={imageUrl}
//       alt="car!" 
//       width={400}
//                 height={200}/>
//         <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
//         {planName}
//         </p>
//         <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
//          {price}
//         </h2>
//         <p className="font-medium text-gray-500 dark:text-gray-300">
//         {duration}
//         </p>
//         <Link href="/gymform">  <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
//           Enroll Now
//         </button>
//         </Link>
//       </div> 
//         </div>
//     );
// };

// export default GymDetailsPage;
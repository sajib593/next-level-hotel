"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Gympage = () => {
  const [gymPlans, setGymPlans] = useState([]);

  useEffect(() => {
    fetchGymPlan();
  }, []);

  const fetchGymPlan = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/gym`);
    const data = await res.json();
    setGymPlans(data);
    console.log(data);
  };

    return (

        <div > 
   
<section>
  <div className='mt-10 mb-10'>
  <div className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-8 mx-auto">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
      Pricing Plan
    </h1>
    <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
    Our gym offers flexible and affordable pricing plans tailored to suit your fitness needs.
     Whether you’re a beginner starting your fitness journey or a seasoned athlete looking for advanced amenities, we have the perfect plan for you. 
     Choose our **Basic Plan** for essential access, or upgrade to the **Standard Plan** for unlimited equipment use and group classes. For those seeking a premium experience, our **Premium Plan** includes personal training,
      exclusive facilities, and wellness perks. Families can enjoy discounts with our **Premium Plan**,
      while students benefit from special rates. No long-term commitment?
     Try our **Pay-as-You-Go** option for maximum flexibility!
    </p>
    <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
    {
      gymPlans.map((gymplan) =>
        <div key={gymplan._id} className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
      <img
      src={gymplan.imageUrl}
      alt="car!" 
      width={400}
                height={200}/>
        <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
        {gymplan.planName}
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
         {gymplan.price}
        </h2>
        <p className="font-medium text-gray-500 dark:text-gray-300">
        {gymplan.duration}
        </p>
        <Link href="/gymform">  <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Enroll Now
        </button>
        </Link>
      </div>
      
      
      )
    

    }



  
    </div>
  </div>
</div>

  </div>
</section>
        </div>
        
    );
};

export default Gympage;
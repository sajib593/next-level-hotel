import React from 'react';

const About = () => {
    return (
        <div>
        <section className="bg-white dark:bg-gray-900">
<div className="container px-6 py-10 mx-auto">
<h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
  What clients saying  {/* /*  changeable*/ }
  
</h1>
<div className="flex justify-center mx-auto mt-6">
  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
  <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
  <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
</div>
<div className="flex items-start max-w-6xl mx-auto mt-16">
  {/* <button
    title="left arrow"
    className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button> */}
  <div>
    <p className="flex items-center text-center text-blue-200 lg:mx-8">
    We hope to offer you an experience rooted in love, respect, and genuine care—an experience that goes beyond the physical amenities and truly enhances the meaning of your stay. At Macenas Luxury Hotels, we believe that hospitality is more than just a service; it’s about creating lasting connections, where every interaction reflects our commitment to making you feel welcome and valued.

Our team is dedicated to providing personalized attention, ensuring that your every need is met with kindness and understanding. Whether it's the warmth of our staff, the tranquil atmosphere, or the luxurious surroundings, everything is designed to make you feel not only at ease but also appreciated. We strive to create an environment where you can relax, unwind, and immerse yourself in the beauty and serenity of your surroundings.

At the heart of Macenas Luxury Hotels is a spirit of hospitality that celebrates not just luxury, but also the human connection. We hope that your time here adds a meaningful chapter to your journey, filled with moments that inspire joy, peace, and reflection. Our deepest wish is that this experience becomes a cherished memory—one that stays with you long after your visit, and invites you to return."


    </p>
    {/* <div className="flex flex-col items-center justify-center mt-8">
      <img
        className="object-cover rounded-full w-14 h-14"
        src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="mt-4 text-center">
        <h1 className="font-semibold text-gray-800 dark:text-white">
          Mia Brown
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Marketer
        </span>
      </div>
    </div> */}
  </div>
  {/* <button
    title="right arrow"
    className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button> */}
</div>
</div>
</section>

    </div>
    );
};

export default About;
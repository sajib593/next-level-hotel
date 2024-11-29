import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      {/* Carousel */}
      <div className="carousel w-full ">
        {/* Carousel Item 1 */}
        <div id="item1" className="carousel-item w-full">
          <iframe
            src="https://www.youtube.com/embed/H1CIBqDeWQ0?modestbranding=1&rel=0&autoplay=1&mute=1&loop=1&playlist=H1CIBqDeWQ0&controls=0&disablekb=1"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-screen object-cover"  // Full screen
            style={{ pointerEvents: "none" }}  // Prevent interaction
          ></iframe>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;  
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Dark overlay for readability */}
      <div className="relative z-10 text-center text-white p-8 flex items-center justify-center h-full">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Build Your Galactic Civilization
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Join one of hundred civilations and help expand your empire across
            the stars.
          </p>
          <a
            href="#game-overview" // Link to your game overview section
            className="bg-red-600 text-white text-lg px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

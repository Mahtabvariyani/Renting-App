import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative hero h-screen">
      <div className="hero__image relative h-full">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="./video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center md:text-left">
          <h1 className="hero__title">
            <Link href="/car">Explore The Cars</Link>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">Click here</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

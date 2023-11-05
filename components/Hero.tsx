import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative hero h-screen">
      <div className="hero__image relative h-full">
        <video autoPlay muted loop={true} className="w-full h-full object-cover">
          <source src="./video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center md:text-left">
          <h1 className="hero__title">
            <Link href="/car">Explore The Cars</Link>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">Click here</p>
        </div>
      </div>
      <div className="flex lg:hidden md:hidden sm:flex text-white">
        <div className="  text-white  text-left pl-5">
          <h1 className="hero__titlee whitespace-nowrap">"Quality Fleet"</h1>
          <p>
          When it comes to car rental services, the quality of the fleet is a pivotal factor. The term 'Quality Fleet' encompasses an elite selection of vehicles designed to meet various needs and preferences. A superior fleet offers a wide range of well-maintained, modern, and efficient vehicles suitable for different purposes, be it leisure, business, or specialized requirements.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;

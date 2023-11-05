import Image from "next/image";
import React from "react";

const ImageCard = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-row items-center hero__image  hero h-[90vh] w-[200vh] ">
        <div className="max-w-5xl w-full relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={1300}
              height={1000}
              className="object-cover"
              src="/car.jpg"
              alt="image description"
            />
          </a>
        </div>
        <div className="  text-white  text-left pl-5">
          <h1 className="hero__titlee whitespace-nowrap">"Safe Driving"</h1>
          <p>
            Regular checks and maintenance of the rental fleet to ensure
            <br />
            that all vehicles are in optimal condition and meet safety
            standards.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4  hero__image hero h-[90vh] w-[200vh]">
        <div className="  text-white  text-left pl-5">
          <h1 className="hero__titlee whitespace-nowrap">"Fast Booking"</h1>
          <p>
            encapsulates the hassle-free and rapid process of reserving
            <br />
            a vehicle in a car rental service. This feature ensures customers
            can
            <br />
            swiftly select their desired car,
            <br />
            specify rental duration, and confirm the booking within minutes.
          </p>
        </div>
        <div className="max-w-5xl w-full  relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={1300}
              height={1000}
              className="object-cover"
              src="/carthree.jpg"
              alt="image description"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center mt-4 hero__image hero  h-[90vh] w-[200vh]">
        <div className="max-w-5xl w-full relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <Image
              width={1300}
              height={1000}
              className="object-cover mt-10"
              src="/cartwo.jpg"
              alt="image description"
            />
          </a>
        </div>
        <div className="  text-white  text-left pl-5">
          <h1 className="hero__titlee whitespace-nowrap">"Flexible Options"</h1>
          <p>
          Car rental services offer diverse packages that allow customers to select <br />
          options suitable for their specific needs.
          <br />
           These may include varied mileage 
          <br />
          plans, diverse insurance options, and multiple car types to accommodate 
          <br />
          individual preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;

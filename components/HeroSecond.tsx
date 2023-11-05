import React from "react";

const Hero = () => {
  return (
    <div className="relative hero h-screen">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle ">
          <strong>
            Streamline your car rental experience with our effortless booking
          </strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
          provident. process.
        </p>
      </div>
      <div className=" relative sm:hidden xs:hidden hidden xl:flex-[1.5] lg:flex  justify-end items-end w-full xl:h-screen">
        <div className="hero__image">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="./video2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import bannerImage from "../../../assets/image/jamal.jpg";
import MainButton from "../../../components/MainButton/MainButton";

const Banner = () => {
  return (
    <div>
      <div className="px-5 my-10">
        <div className=" md:flex justify-between items-center">
          <div className="md:w-1/2">
            <h1 className="md:text-5xl font-bold text-secondary">
              Discover the world across key areas!
            </h1>
            <p className="py-6">
              Make 2025 the year you discover world open community where you can
              live, learn, create and innovate at the heart of Europe. Make 2025
              the year you discover world open community where you can live,
              learn, create and innovate at the heart of Europe. Make 2025 the
              year you discover world open community where you can live, learn,
              create and innovate at the heart of Europe. year you discover
              world open community where you can live, learn, create and
              innovate at the heart of Europe.
            </p>
            <MainButton>Get started</MainButton>
          </div>
          <div className="md:w-1/2 md:flex justify-end">
            <img
              src={bannerImage}
              className=" mt-5 md:mt-0 p-2 md:p-0 md:w-4/6 md:h-[490px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

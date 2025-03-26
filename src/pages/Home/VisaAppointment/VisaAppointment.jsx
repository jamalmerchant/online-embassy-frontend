import React from "react";
import MainButton from "../../../components/MainButton/MainButton";
import appointment from "../../../assets/image/cuteimg.png";
import visa from "../../../assets/image/scute embassy.jpg";
import { Link } from "react-router-dom";
const VisaAppointment = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${visa})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "#000000a3",
        }}
        className=""
      >
        <div className="px-5 pt-10 md:pt-20 my-10">
          <div className=" md:flex justify-between items-center">
            <div className="hidden md:w-1/2 md:flex justify-end">
              <img
                src={appointment}
                className="py-20 mt-5 md:mt-0 p-2 md:p-0 md:w-4/6 md:h-[490px] rounded-lg w-20"
              />
            </div>
            <div className="md:w-1/2 md:pe-5 pb-10 md:pb-0">
              <h1 className="md:text-5xl font-bold text-white">
                Discover the world across key areas!
              </h1>
              <p className="py-6 text-justify text-white">
                Make 2025 the year you discover world open community where you
                can live, learn, create and innovate at the heart of Europe.
                Make 2025 the year you discover world open community where you
                can live, learn, create and innovate at the heart of Europe.
                Make 2025 the year you discover world open community where you
                can live, learn, create and innovate at the heart of Europe.
                year you discover world open community where you can live,
                learn, create and innovate at the heart of Europe.
              </p>

              <Link to="/appointment">
                <MainButton>Get Appointment</MainButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaAppointment;

import React from "react";
import MainButton from "../../../components/MainButton/MainButton";

const AppointmentOption = ({ appointmentoption }) => {
  const { name, slots } = appointmentoption;
  return (
    <div className="card shadow-xl p-6 text-center bg-yellow-500 text-white">
      <div className="card-body py-2">
        <h2 className="text-center text-2xl font-semibold">{name}</h2>
        <p>
          {" "}
          {slots.length}
          {slots.length > 1 ? "Times" : "Time"} Available
        </p>
        <button className="btn btn-outline">Get service</button>
      </div>
    </div>
  );
};

export default AppointmentOption;

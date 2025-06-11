import React from "react";

const AppointmentOption = ({ appointOption, setAppointments }) => {
  const { name, slots } = appointOption;

  return (
    <div className="card shadow-xl p-6 text-center bg-yellow-500 text-white">
      <div className="card-body py-2">
        <h2 className="text-center text-2xl font-semibold">{name}</h2>
        <p>
          {slots.length} {slots.length > 1 ? "Times" : "Time"} Available
        </p>
        {/*=====modal calling==*/}
        <label
          htmlFor="booking-modal"
          className="btn btn-outline"
          onClick={() => setAppointments(appointOption)}
        >
          Get Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentOption;

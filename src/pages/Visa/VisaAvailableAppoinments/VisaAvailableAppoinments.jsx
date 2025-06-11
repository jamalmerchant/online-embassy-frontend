import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";

const VisaAvailableAppoinments = ({ selectedDate }) => {
  //
  const date = format(selectedDate, "PP");
  const [appointments, setAppointments] = useState(null);
  console.log(appointments);

  const {
    data: appointmentOptions,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentItemsServices", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/appointmentItemsServices?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" my-5 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-secondary">Visa Appointment</h2>

        <h3 className="text-2xl md:text-3xl">
          Visa Appoinments on: {format(selectedDate, "PP")}
        </h3>
      </div>
      {/*========appointment option =====*/}
      <div className="grid md:grid-cols-3 gap-4">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointOption={option}
            setAppointments={setAppointments}
          ></AppointmentOption>
        ))}
      </div>
      {/*========booking modal=====*/}
      {appointments && (
        <BookingModal
          setAppointments={setAppointments}
          appointments={appointments}
          selectedDate={selectedDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default VisaAvailableAppoinments;

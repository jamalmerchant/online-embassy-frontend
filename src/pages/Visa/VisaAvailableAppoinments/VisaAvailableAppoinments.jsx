import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import Loading from "../../Shared/Loading/Loading";

const VisaAvailableAppoinments = ({ selected }) => {
  // const [AppoinmentData, setAppointmentData] = useState([]);
  // useEffect(() => {
  //   fetch("visaappointments.json")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentData(data));

  // }, []);

  // transtack query

  const { data: appointmentoption, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("visaappointments.json");
      const data = await res.json();
      console.log(data);

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
          Visa Appoinments on: {format(selected, "PP")}
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {appointmentoption.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentoption={option}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default VisaAvailableAppoinments;

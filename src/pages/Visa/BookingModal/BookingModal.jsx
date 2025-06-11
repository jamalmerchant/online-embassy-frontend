import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({
  setAppointments,
  appointments,
  selectedDate,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = appointments;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const candidateName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(slot, name, email, phone);
    const booking = {
      appointmentDate: date,
      candidate: candidateName,
      serviceName: name,
      slot: slot,
      email: email,
      phone: phone,
    };
    console.log(booking);
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("booking confirmed!");
          refetch();
          setAppointments(null);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{name}</h3>

            <label
              htmlFor="booking-modal"
              className="btn btn-primary text-white rounded-full w-12 h-10 text-xl"
            >
              X
            </label>
          </div>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              Value={date}
              placeholder="Date here"
              className="input input-bordered w-full mt-3"
            />

            <select name="slot" className="select select-bordered w-full mt-4">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="name here"
              className="input input-bordered w-full mt-3"
            />
            <input
              name="email"
              type="email"
              placeholder="email here"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full mt-3"
            />
            <input
              name="phone"
              type="phone"
              placeholder="phone here"
              className="input input-bordered w-full mt-3"
            />
            <input
              className="btn btn-primary text-white w-full mt-4"
              type="Submit"
              value={"Booking Now"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

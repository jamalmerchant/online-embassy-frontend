import { format } from "date-fns";
import React from "react";

const BookingModal = ({ appointments, selectedDate }) => {
  const { name, slots } = appointments;
  const date = format(selectedDate, "PP");

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
          <form action="">
            <input
              type="text"
              disabled
              Value={date}
              placeholder="Date here"
              className="input input-bordered w-full mt-3"
            />

            {/*  */}
            <select className="select select-bordered w-full mt-4">
              <option disabled selected>
                8.0-9.0
              </option>
              <option>9.0-9.30</option>
              <option>9.30-10.0</option>
            </select>
            <input
              type="name"
              placeholder="name here"
              className="input input-bordered w-full mt-3"
            />
            <input
              type="email"
              placeholder="email here"
              className="input input-bordered w-full mt-3"
            />
            <input
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

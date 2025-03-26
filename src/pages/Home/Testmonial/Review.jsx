import React from "react";

const Review = ({ singlereview }) => {
  const { location, name, img, review } = singlereview;

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="items-center card-actions mt-5">
          <img
            className="w-16 h-16 rounded-full border-2 border-secondary p-1"
            src={img}
            alt=""
          />
          <div>
            <h2 className="card-title text-secondary">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

import React from "react";
import MainButton from "../../../components/MainButton/MainButton";
import { Link } from "react-router-dom";

const Service = ({ ServiceData }) => {
  const { name, des, image } = ServiceData;
  return (
    <div className="card shadow-xl p-6 text-center bg-yellow-500 text-white">
      <figure>
        <img
          className="h-[200px] rounded-sm border-[1px] border-red-700"
          src={`data:image/jpeg;base64,${image}`}
          alt=""
        />
      </figure>

      <div className="card-body py-2">
        <h2 className="text-center text-2xl font-semibold">{name}</h2>
        <p className="text-justify">{des}</p>

        <MainButton>
          {" "}
          <Link to="/visa"> See Details </Link>
        </MainButton>
      </div>
    </div>
  );
};

export default Service;

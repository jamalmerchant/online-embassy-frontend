import React from "react";
import loader from "../../../assets/image/loading.png";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-24 h-20" src={loader} alt="" />
    </div>
  );
};

export default Loading;

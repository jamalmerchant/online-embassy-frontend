import React from "react";
import visa from "../../../assets/image/v.png";
import f1visa from "../../../assets/image/education.png";
import tourist from "../../../assets/image/tourist.png";
import imigrantion from "../../../assets/image/imigrant.png";
import Service from "./Service";

const Services = () => {
  const Services = [
    {
      _id: 1,
      name: "Visa Process",
      img: visa,
      description:
        "Collect your online visa established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
    },
    {
      id: 2,
      name: "F1 visa Details",
      img: f1visa,
      description:
        " F1 visa It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
    },
    {
      id: 3,
      name: "tourist visa process",
      img: tourist,
      description:
        " tourist It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
    },
    {
      id: 4,
      name: "imigration",
      img: imigrantion,
      description:
        " imigration It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
    },
  ];

  return (
    <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-secondary text-2xl">Our Services</h2>
        <h3 className=" text-2xl md:text-3xl">
          The online embasy service we provide
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {Services.slice(0, 3).map((ServiceData) => (
          <Service key={ServiceData._id} ServiceData={ServiceData}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

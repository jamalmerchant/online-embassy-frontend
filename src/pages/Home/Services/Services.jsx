import React from "react";
import Service from "./Service";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {
  const {
    data: Services,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/all-services");
      const data = await res.json();

      return data;
    },
  });

  // const services = [
  //   {
  //     _id: 1,
  //     name: "Visa Process",
  //     img: visa,
  //     description:
  //       "Collect your online visa established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
  //   },
  //   {
  //     id: 2,
  //     name: "F1 visa Details",
  //     img: f1visa,
  //     description:
  //       " F1 visa It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
  //   },
  //   {
  //     id: 3,
  //     name: "tourist visa process",
  //     img: tourist,
  //     description:
  //       " tourist It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
  //   },
  //   {
  //     id: 4,
  //     name: "imigration",
  //     img: imigrantion,
  //     description:
  //       " imigration It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
  //   },
  // ];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-secondary text-2xl">Our Services</h2>
        <h3 className=" text-2xl md:text-3xl">
          The online embasy service we provide
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {Services.map((ServiceData) => (
          <Service key={ServiceData._id} ServiceData={ServiceData}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;

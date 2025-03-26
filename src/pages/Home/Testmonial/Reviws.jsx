import React from "react";
import people1 from "../../../assets/image/download.jpeg";
import people2 from "../../../assets/image/image.people.jpeg";
import people3 from "../../../assets/image/img.people.jpeg";
import quote from "../../../assets/image/block.quote.png";
import Review from "./Review";
const Reviws = () => {
  const testmonial = [
    {
      _id: 1,
      name: "winson herry",
      img: people1,
      review:
        "It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
      location: "california",
    },
    {
      id: 2,
      name: "winson herry",
      img: people2,
      review:
        "It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
      location: "california",
    },
    {
      id: 3,
      name: "winson herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
      location: "california",
    },
    {
      id: 4,
      name: "winson herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout.the point of using lorem a more-or-less normal distibut to using content here, content ",
      location: "california",
    },
  ];

  return (
    <div className="my-14 px-5 mx-auto">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl text-red-700 font-semibold">testmonial</h2>
          <h4>people says about us</h4>
        </div>
        <div>
          <img className="w-20 h-24" src={quote} alt="" />
        </div>
      </div>

      <div className=" grid md:grid-cols-3 gap-4 text-justify">
        {testmonial.slice(0, 3).map((singlereview) => (
          <Review key={singlereview._id} singlereview={singlereview}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviws;

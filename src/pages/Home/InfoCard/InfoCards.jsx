import React from "react";
import clock from "../../../assets/image/khan.jpg";
import location from "../../../assets/image/khanlocation.jpg";
import phone from "../../../assets/image/khanwatch.png";
import InfoCard from "./infoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "opening hours",
      description: "open 9.00 am to 4.00 pm 5 days",
      image: clock,
      bgClass: "bg-gradient-to-l  from-secondary to-primary",
    },
    {
      id: 2,
      name: "our Location",
      description: "bharidhara, road-13, house:233",
      image: location,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact US",
      description: "open 9.00 am to 4.00 pm 5 days",
      image: phone,
      bgClass: "bg-gradient-to r from-primary to-secondary",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;

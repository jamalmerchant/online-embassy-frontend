import React from "react";
import Banner from "./Banner/Banner";
import Reviws from "./Testmonial/Reviws";
import InfoCard from "./InfoCard/InfoCards";
import VisaAppointment from "./VisaAppointment/VisaAppointment";
import EducationVisa from "./EducationVisa/EducationVisa";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCard></InfoCard>
      <Services></Services>
      <EducationVisa></EducationVisa>
      <VisaAppointment></VisaAppointment>
      <Reviws></Reviws>
    </div>
  );
};

export default Home;

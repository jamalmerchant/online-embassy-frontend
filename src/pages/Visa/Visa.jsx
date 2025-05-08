import React, { useState } from "react";
import VisaBanner from "./VisaBanner/VisaBanner";
import VisaAvailableAppoinments from "./VisaAvailableAppoinments/VisaAvailableAppoinments";

const Visa = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <VisaBanner selected={selected} setSelected={setSelected}></VisaBanner>
      <VisaAvailableAppoinments
        selectedDate={selected}
      ></VisaAvailableAppoinments>
    </div>
  );
};

export default Visa;

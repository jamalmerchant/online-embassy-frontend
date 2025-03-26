import React from "react";
import Header from "../../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className=" md:mt-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

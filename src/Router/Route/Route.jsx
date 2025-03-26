import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Visa from "../../pages/Visa/Visa";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import AppointmentOption from "../../pages/Visa/VisaAvailableAppoinments/AppointmentOption";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/visa",
        element: <Visa></Visa>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;

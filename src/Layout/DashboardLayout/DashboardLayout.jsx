import React, { useContext } from "react";
import Header from "../../pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div class="drawer lg:drawer-open md:mt-20">
        <input id="dashboard drawer" type="checkbox" class="drawer-toggle" />
        <div class=" bg-base-200 drawer-content my-20 pt-5 md:my-0 px-4 md:p-10 min-h-screen">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side my-20 md:mt-0">
          <label
            htmlFor="dashboard drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu min-h-full w-80 p-0 rounded-0">
            <li>
              <Link className="rounded-none mt-5" to="/dashboard">
                My Appointment
              </Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link className="rounded-none mt-2" to="/dashboard/all-users">
                    ALL users
                  </Link>
                </li>
                <li>
                  <Link
                    className="rounded-none mt-2"
                    to="/dashboard/add-service"
                  >
                    Add Service
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

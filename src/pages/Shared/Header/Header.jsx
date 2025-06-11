import React, { useContext } from "react";
import logo from "../../../assets/image/online.emb.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/about">About</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="contact">Contact</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="visa">Visa</NavLink>{" "}
      </li>

      {user?.uid ? (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <button onClick={logOut}>Sign Out</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="navbar justify-between shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* ======= small device ========= */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
          <NavLink to="/" className="">
            <img className="h-24 w-36" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* ======= large device ========= */}

          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
        <label
          for="dashboard drawer"
          class="btn btn-primary drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;

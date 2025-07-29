import React from "react";
import logo from "../assets/images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../utils/constants";

const NavBar = () => {

  return (
    //#00897B
    <nav className="w-full bg-[#3C18BE] h-20 flex items-center justify-between px-4">
      <Link to={"/"}>
        <div className="flex items-center gap-2">
          <img src={logo} className="w-[150px] -ml-10" alt="Logo" />

          <div className="justify-between flex w-full">
            <div className="flex flex-col text-white -ml-5 my-auto">
              <h1 className="text-secondary text-lg md:text-2xl font-semibold">
                SAFETY SECURITY,INC.
              </h1>
              <p className="text-secondary text-xs md:text-sm font-normal">
                securing your businesses and properties
              </p>
            </div>
            {/* <div>
              {navItems.map(navItem) }
            </div>
            <div>
              <button type="button" className=" bg-white text-blue-800 p-3 font-semibold text-sm rounded-full">Request A Quote</button>
            </div> */}
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;

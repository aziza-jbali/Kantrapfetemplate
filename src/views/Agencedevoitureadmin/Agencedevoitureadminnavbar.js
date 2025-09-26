import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    {/* Logo / Title */}
    <div className="flex items-center">
      <span    className="text-2xl font-bold   color-black no-underline tracking-wide">
        AdaptCar Admin
      </span>
    </div>

    {/* Toggle Button (Mobile) */}
    <button
      className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
    >
      <span className="block relative w-6 h-px rounded-sm bg-white"></span>
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
    </button>

    {/* Navbar Links */}
    <div className="lg:flex flex-grow items-center">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
        <li className="nav-item">
          <a   className="px-3   patop-30 flex items-center  color-black no-underline text-sm uppercase font-semibold  hover:text-yellow-400 transition duration-300" href="#dashboard">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 patop-30 flex items-center  color-black no-underline text-sm uppercase font-semibold  hover:text-yellow-400 transition duration-300" href="#cars">
            Cars
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 patop-30 flex items-center   color-black no-underline text-sm uppercase font-semibold  hover:text-yellow-400 transition duration-300" href="#clients">
            Clients
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 patop-30 flex items-center text-sm  color-black no-underline uppercase font-semibold  hover:text-yellow-400 transition duration-300" href="#bookings">
            Bookings
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 patop-30 flex items-center text-sm  color-black no-underline uppercase font-semibold  hover:text-yellow-400 transition duration-300" href="#statistics">
            Statistics
          </a>
        </li>
        <li className="nav-item">
          <a className="px-3 patop-30 flex items-center  color-black no-underline  text-sm uppercase font-semibold  hover:text-yellow-400 transition duration-300" href="#profile">
            Profile
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

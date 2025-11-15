import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile/ProfileLogo";
import AuthPage from "./utilities/Auth";
import Example from "./NAV.jsx";
export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg bg-white/10
        border-b border-white/20
        shadow-md
      "
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-white drop-shadow">
          HealthQuest
        </h1>
        <ul className="flex gap-6 text-md font-medium text-white">
          <Link to="/Homepage" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/Tracking" className="hover:text-gray-200 transition">
            Tracking
          </Link>
          <Link to="/Goals" className="hover:text-gray-200 transition">
            Goals
          </Link>

          <a href="#" className="hover:text-gray-200 transition">
            Challenges
          </a>

          <a href="#" className="hover:text-gray-200 transition">
            Recipes
          </a>

          <div className="cursor-pointer">
            <Profile />
          </div>
        </ul>
      </div>
    </nav>
  );
}

{
  /* <img (hover effect)
  src={spartanImg}
  alt="Spartan workout routines"
  className="w-80 h-60 rounded shadow-md hover:shadow-2xl transition-shadow duration-300"
/>; */
}

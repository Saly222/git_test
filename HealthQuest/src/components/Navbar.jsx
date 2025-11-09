import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile/ProfileLogo";
import AuthPage from "./utilities/Auth";
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-green-150 rounded-b-lg">
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold text-white ">HealthQuest</h1>
        <ul className="flex gap-6 text-md font-medium text-white">
          <Link to="/Homepage" className="hover:underline">
            Home
          </Link>
          <Link to="/Tracking" className="hover:underline">
            Tracking
          </Link>
          <Link to="/Goals" className="hover:underline">
            Goals
          </Link>

          <li>
            <a href="#" className="hover:underline">
              Challenges
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Recipes
            </a>
          </li>
          <li className="">
            <div className="cursor-pointer">
              {/* <AuthPage /> */}
              <Profile />
            </div>
          </li>
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

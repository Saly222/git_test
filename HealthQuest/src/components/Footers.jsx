import Homepage from "../pages/Homepage";
import { Link } from "react-router-dom";
import AuthPage from "./utilities/Auth";

export default function Footer() {
  return (
    <footer className="bg-blue-600 py-20 px-10">
      <div className="max-w-6xl mx-auto flex justify-between items-start md:items-center">
        <div>
          <h1 className="text-xl font-bold text-white">HealthQuest</h1>
          <p className="text-sm text-white">
            Your ultimate fitness tracking companion.
          </p>
          <Link
            to="/Auth"
            className="mt-4 inline-block bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
          >
            Join Us
          </Link>
        </div>
        <div className="flex md:flex sm:flex gap-4 text-white mt-10 md:mt-0">
          <Link to="/Homepage" className="hover:underline cursor:pointer">
            Home
          </Link>
          <Link to="/Tracking" className="hover:underline cursor:pointer">
            Tracking
          </Link>
          <a href="Goals">Goals</a>
          <a href="Challenges">Challenges</a>
          <a href="Recipes">Recipes</a>
        </div>
      </div>
      <div className="mt-6 border-t border-white/30 pt-4 text-center text-sm text-white max-w-6xl mx-auto">
        &copy; {new Date().getFullYear()} HealthQuest. All rights reserved.
      </div>
    </footer>
  );
}

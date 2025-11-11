import React from "react";
import { Link } from "react-router-dom";
export default function NavBar({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 bg-black overflow-hidden">
      <nav className="bg-gray-700 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">FitTrack</h1>
        <div>
          <Link to="/Homepage" className="mr-4">
            Homepage
          </Link>
          <Link to="/Workout">Workout</Link>
        </div>
      </nav>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-700 text-center p-4 text-gray-900">
        &copy; 2024 FitTrack. All rights reserved.
      </footer>
    </div>
  );
}

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Workout from "./Workout.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="*" element={<Navigate to="/Homepage" />} />
          <Route path="/Workout" element={<Workout></Workout>} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;

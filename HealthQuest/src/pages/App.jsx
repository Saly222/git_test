import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";
import Homepage from "./Homepage.jsx";
import FAQ from "../components/FAQ.jsx";
import Footers from "../components/Footers.jsx";
import Profile from "../components/ProfileLogo.jsx";
import AuthPage from "../components/Auth.jsx";
function App() {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <Navbar />
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Auth" element={<AuthPage />} />
        </Routes>
        <FAQ />
        <Footers />
      </div>
    </div>
  );
}

export default App;

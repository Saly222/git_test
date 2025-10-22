import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";
import Homepage from "./Homepage.jsx";
import FAQ from "../components/FAQ.jsx";
import Footers from "../components/Footers.jsx";
import ProfilePage from "../components/ProfilePage";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <FAQ />
        <Footers />
      </div>
    </div>
  );
}

export default App;

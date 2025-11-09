import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import Homepage from "./Homepage.jsx";
import FAQ from "../components/FAQ.jsx";
import Footers from "../components/Footers.jsx";
import Tracking from "./Tracking.jsx";
import ProfileLogin from "../components/utilities/LoginPage.jsx";
import ProfilePage from "../components/Profile/ProfilePage.jsx";
import Profile from "../components/Profile/Profile.jsx";
import AuthPage from "../components/utilities/Auth.jsx";
import supabase from "../components/utilities/supabaseClient.js";
import Goals from "./Goals.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current logged-in user
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Tracking" element={<Tracking />} />
        <Route path="/Goals" element={<Goals />} />

        {/* Auth route */}
        <Route
          path="/Auth"
          element={user ? <Navigate to="/Profile" /> : <AuthPage />}
        />

        {/* Profile route */}
        <Route
          path="/Profile"
          element={user ? <Profile user={user} /> : <Navigate to="/Auth" />}
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/Homepage" />} />
      </Routes>

      <Footers />
    </div>
  );
}

export default App;

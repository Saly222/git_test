import { useState } from "react";
import supabase from "./utilities/supabaseClient";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Email sign in
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) setMessage(error.message);
    else setMessage(`Welcome back, ${data.user?.email}!`);
  };

  // Google login
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) alert(error.message);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else setMessage("Check your email for confirmation!");
  };

  // GitHub login
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) alert(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome to FitTrack
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("email")}
            className={`px-4 py-2 rounded-l-lg ${
              activeTab === "email" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Email Login
          </button>
          <button
            onClick={() => setActiveTab("social")}
            className={`px-4 py-2 rounded-r-lg ${
              activeTab === "social" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Social Login
          </button>
        </div>

        {/* Email Login */}
        {activeTab === "email" && (
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="border w-full p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {message && (
              <p className="text-sm text-center text-gray-600 mt-2">
                {message}
              </p>
            )}
          </form>
        )}

        {/* Social Login */}
        {activeTab === "social" && (
          <div className="flex flex-col gap-3">
            <button
              onClick={signInWithGoogle}
              className="bg-red-500 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-red-600 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <button
              onClick={signInWithGitHub}
              className="bg-gray-800 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-900 transition"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-5 h-5"
              />
              Continue with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

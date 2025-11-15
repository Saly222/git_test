import supabase from "../utilities/supabaseClient";

export default function Profile({ user }) {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/Auth";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user.email} 👋</h1>
        <p className="text-gray-600 mb-6">
          Here's your FitTrack profile dashboard.
        </p>

        <div className="border rounded-xl p-4 text-left space-y-2 bg-gray-50 mb-6">
          <p>
            <strong>User ID:</strong> {user.id}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(user.created_at).toLocaleString()}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

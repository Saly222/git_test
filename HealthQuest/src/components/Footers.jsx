import Homepage from "../pages/Homepage";

export default function Footer() {
  return (
    <footer className="bg-blue-600 py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-xl font-bold text-white">HealthQuest</h1>
          <p className="text-sm text-white">
            Your ultimate fitness tracking companion.
          </p>
          <button className="mt-4 bg-black hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
            <a href="Profile" className="text-white">
              Join Us
            </a>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-white mt-10 md:mt-0">
          <a href="Homepage">Home</a>
          <a href="Tracking">Tracking</a>
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

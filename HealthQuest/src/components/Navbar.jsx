export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-3 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <h1 className="text-xl font-bold">HealthQuest</h1>
        <ul className="flex space-x-8 ml-auto">
          <li>
            <a href="#" className="hover:underline color-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Tracking
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Goals
            </a>
          </li>
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
          <li>
            <a href="#" className="hover:underline">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo / Brand */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-xl font-bold">HealthQuest</h1>
          <p className="text-sm mt-1">
            Your ultimate fitness tracking companion.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Tracking
          </a>
          <a href="#" className="hover:underline">
            Goals
          </a>
          <a href="#" className="hover:underline">
            Challenges
          </a>
          <a href="#" className="hover:underline">
            Recipes
          </a>
          <a href="#" className="hover:underline">
            Profile
          </a>
        </div>

        {/* Social / Copyright */}
        <div className="mt-6 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} HealthQuest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

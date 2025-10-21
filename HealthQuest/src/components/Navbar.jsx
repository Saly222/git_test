import Profile from "./Profile";
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-green-150 rounded-b-lg">
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold text-white ">HealthQuest</h1>
        <ul className="flex gap-6 text-md font-medium text-white">
          <li>
            <a href="#" className="hover:underline">
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
          <li className="">
            <Profile />
            <a href="#" className="hover:underline"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
{
  /* <img (hover effect)
  src={spartanImg}
  alt="Spartan workout routines"
  className="w-80 h-60 rounded shadow-md hover:shadow-2xl transition-shadow duration-300"
/>; */
}

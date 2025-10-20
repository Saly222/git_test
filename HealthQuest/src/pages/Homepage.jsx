import spartanImg from "../assets/spartanworkout.jpg";

export default function Homepage() {
  return (
    <div className="min-h-screen text-white flex flex-col py-5 ">
      <div className="text-center mt-10">
        <h1 className="text-xl font-bold mb-4">Fitness tracking app</h1>
        <h3 className="text-md font-medium mb-4">
          Welcome to HealthQuest! Your ultimate fitness tracking companion.
        </h3>
      </div>
      <div className="px-4 md:px-16 mt-10">
        <h2 className="font-bold text-xl">Workout Routines</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-20 gap-10 w-[80%] mx-auto">
        <h2 className="text-lg font-semibold text-center md:text-left md:mt-50">
          Spartan style workout routines.
        </h2>
        <img
          src={spartanImg}
          alt="Spartan workout routines"
          className="w-80 md:w-80 h-auto rounded shadow-md"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-20 gap-10 w-[80%] mx-auto">
        <img
          src={spartanImg}
          alt="Spartan workout routines"
          className="w-80 md:w-80 h-auto rounded shadow-md"
        />
        <h2 className="text-lg font-semibold text-center md:text-left md:mt-50 ml-auto">
          Personalise workout.
        </h2>
      </div>
      <div className="px-4 md:px-16 mt-20">
        <h2 className="font-bold text-xl">Community</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-20 gap-10 w-[80%] mx-auto">
        <h2 className="text-lg font-semibold text-center md:text-left md:mt-50">
          Spartan style workout routines.
        </h2>
        <img
          src={spartanImg}
          alt="Spartan workout routines"
          className="w-80 md:w-80 h-auto rounded shadow-md"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-20 gap-10 w-[80%] mx-auto">
        <img
          src={spartanImg}
          alt="Spartan workout routines"
          className="w-80 md:w-80 h-auto rounded shadow-md"
        />
        <h2 className="text-lg font-semibold text-center md:text-left md:mt-50 ml-auto">
          Personalise workout.
        </h2>
      </div>
    </div>
  );
}

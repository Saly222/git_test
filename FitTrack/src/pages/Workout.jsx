export default function Workout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Quick Workout");
  };

  return (
    <div className="text-white min-h-screen">
      <div className="flex justify-center mb-10">
        <h1 className="text-3xl font-bold mb-6 ">Workout</h1>
      </div>
      <div className="">
        <p>Quick Start</p>
        <button
          onClick={handleSubmit}
          className="mt-6 border p-2 rounded bg-blue-600 hover:bg-blue-700"
        >
          + Start Quick Workouk
        </button>
      </div>
    </div>
  );
}

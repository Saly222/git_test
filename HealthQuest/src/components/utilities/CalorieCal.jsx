import { useState } from "react";

export default function CalorieCal() {
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [height, SetHeight] = useState("");
  const [weight, SetWeight] = useState("");
  const [activity, SetActivity] = useState("");
  const [calorie, SetCalorie] = useState(null);
  const [error, SetError] = useState("");

  function CalculateBMR(weight, height, age, gender) {
    if (gender === "male") return 10 * weight + 6.25 * height - 5 * age + 5;
    if (gender === "female") return 10 * weight + 6.25 * height - 5 * age - 161;
    return null;
  }

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very: 1.9,
  };

  function calculateCalorie(bmr, activity) {
    return bmr * (activityMultipliers[activity] || 1.2);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (!h || !w) return SetError("Please enter a valid height and weight.");
    if (h <= 0 || w <= 0)
      return SetError("Height and Weight must be greater than zero.");
    if (a < 15 || a > 120)
      return SetError("Please provide an age between 15 - 120.");
    if (!gender) return SetError("Please select a gender.");
    if (!activity) return SetError("Please select an activity.");

    SetError("");
    const bmr = CalculateBMR(w, h, a, gender);
    const dailyCalorie = calculateCalorie(bmr, activity);
    SetCalorie(dailyCalorie);
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-col sm:flex-col mb-10"
      >
        <label>Age</label>
        <input
          className="border p-2 mr-4 rounded bg-gray-800 text-white"
          type="number"
          value={age}
          onChange={(e) => SetAge(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => SetGender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => SetGender(e.target.value)}
          />
          Female
        </label>
        <label>Height (cm)</label>
        <input
          className="border p-2 mr-4 rounded bg-gray-800 text-white"
          type="number"
          value={height}
          onChange={(e) => SetHeight(e.target.value)}
        />
        <label>Weight (kg)</label>
        <input
          className="border p-2 mr-4 rounded bg-gray-800 text-white"
          type="number"
          value={weight}
          onChange={(e) => SetWeight(e.target.value)}
        />
        <label>Activity</label>
        <select value={activity} onChange={(e) => SetActivity(e.target.value)}>
          <option value="">Select Activity</option>
          <option value="sedentary">Sedentary: Little to no Exercise</option>
          <option value="light">Light: exercise 1-3 times/week</option>
          <option value="moderate">Moderate: exercise 4-5 times/week</option>
          <option value="active">
            Active: daily or intense exercise 3-4 times/week
          </option>
          <option value="very">
            Very Active: intense exercise 6-7 times/week
          </option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-gray-800 text-white mt-6"
        >
          Calculate
        </button>
      </form>

      {calorie && (
        <div>
          <p>Maintain Weight: {Math.round(calorie)} kcal/day</p>
          <p>Mild Weight Loss: {Math.round(calorie - 250)} kcal/day</p>
          <p>Weight Loss: {Math.round(calorie - 500)} kcal/day</p>
          <p>Extreme Weight Loss: {Math.round(calorie - 1000)} kcal/day</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

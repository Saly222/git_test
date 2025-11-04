import { useState } from "react";

export default function CalculatorBMI() {
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [height, SetHeight] = useState("");
  const [weight, SetWeight] = useState("");
  const [bmiCategory, SetBmiCategory] = useState("");
  const [bmi, SetBmi] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);
    if (!height || !weight) {
      setError("Please enter valid height and weight. ");
      return;
    }
    if (h <= 0 || w <= 0) {
      setError("Height and Weight must be greater then zero.");
      return;
    }
    if (a < 2 || a > 120) {
      setError("Please provide an age between 2 and 120. ");
      return;
    }
    setError("");
    const heightInMeters = h / 100;
    const bmiValue = w / (heightInMeters * heightInMeters);
    SetBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      SetBmiCategory("UnderWeight");
    } else if (bmiValue < 25) {
      SetBmiCategory("Normal");
    } else if (bmiValue < 30) {
      SetBmiCategory("OverWeight");
    } else {
      SetBmiCategory("Obese");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Age"> Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={(e) => SetAge(e.target.value)}
        />
        <label htmlFor="Gender">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => SetGender(e.target.value)}
          />
          Male
        </label>
        <label htmlFor="Gender">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => SetGender(e.target.value)}
          />
          Female
        </label>

        <label htmlFor="Height">Height</label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={(e) => SetHeight(e.target.value)}
        />
        <label htmlFor="Weight">Weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={(e) => SetWeight(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-4 rounded bg-gray-800 text-white"
        >
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>Category: {bmiCategory}</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

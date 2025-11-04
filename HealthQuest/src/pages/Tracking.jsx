import CenterContainer from "../components/CenterContainer";
import CalculatorBMI from "../components/utilities/BMI";
import { useState } from "react";
export default function Tracking() {
  const [progess, setProgess] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  return (
    <div className="min-h-screen text-white flex flex-col py-5">
      <CenterContainer className="text-center mt-10">
        <h1 className="text-xl font-bold mb-4">Tracking Page</h1>
        <p>Your Performance, Visualise and Track your journey here.</p>
      </CenterContainer>

      {/*BMI Calculator Form */}
      <div>
        <form
          action="
      "
        ></form>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between mt-20 gap-10 w-[80%] mx-auto text-center text-white ">
        <label>
          <input
            id="StartWeight"
            type="text"
            name="StartWeight"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            className="border p-2 mr-4 rounded bg-gray-800 text-white"
          />
          Current Weight
        </label>
        <label>
          <input
            id="TargetWeight"
            type="text"
            name="TargetWeight"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            className="border p-2 mr-4 rounded bg-gray-800 text-white"
          />
          Target Weight
        </label>
        <label>
          <input
            id="StartWeight"
            type="text"
            name="StartWeight"
            value={progess}
            onChange={(e) => setProgess(e.target.value)}
            className="border p-2 mr-4 rounded bg-gray-800 text-white"
          />
          Current Progress
        </label>
      </div>
      <div className="text-white flex flex-col md:flex-col mt-20">
        <CalculatorBMI></CalculatorBMI>
      </div>
    </div>
  );
}

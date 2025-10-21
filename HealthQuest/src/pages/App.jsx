import Navbar from "../components/Navbar";
import "../index.css";
import Homepage from "./Homepage.jsx";
import FAQ from "../components/FAQ.jsx";
import Footers from "../components/Footers.jsx";
function App() {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <Navbar />
        <Homepage />
        <FAQ />
        <Footers />
      </div>
    </div>
  );
}
export default App;

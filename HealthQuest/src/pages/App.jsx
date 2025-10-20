import Navbar from "../components/Navbar";
import "../index.css";
import Homepage from "./Homepage.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
function App() {
  return (
    <div className="min-h-screen bg-black">
      <div>
        <Navbar />
        <Homepage />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
export default App;

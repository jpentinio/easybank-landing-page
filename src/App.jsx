import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
      <div className="flex justify-center gap-1 p-2 text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-green"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/jpentinio"
          target="_blank"
          className="text-lime-green"
        >
          Joshua M. Pentinio
        </a>
      </div>
    </>
  );
}

export default App;

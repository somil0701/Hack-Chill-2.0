import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tracks from "./components/Tracks/Tracks";
import Partners from "./components/Partners/Partners";
import Faq from "./components/Faq/faq";
import Herosection from "./components/Herosection/Herosection";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Prizes from "./components/Prizes/Prizes";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    // Inject Devfolio script dynamically
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.onload = () => {
      console.log("Devfolio script loaded.");

      // Wait for a short time to ensure button is rendered
      setTimeout(() => {
        if (window.Devfolio) {
          console.log("Initializing Devfolio...");
          window.Devfolio.init();
        } else {
          console.error("Devfolio is still undefined!");
        }
      }, 500); // 500ms delay ensures button is in the DOM
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Tracks />
      <Timeline />
      <Partners />
      <Prizes />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Chipset from "./components/Chipset";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model3D from "./components/Model/Model3D";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";

function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model3D />
        <Features />
        <Chipset />
      </main>
    </>
  );
}

export default Sentry.withProfiler(App);

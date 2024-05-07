import "./App.css";
import ChipSet from "./components/Chipset";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model3D from "./components/Model/Model3D";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";
import NavbarBot from "./components/NavbarBot";
import { useInView } from "react-intersection-observer";

function App() {
  const [ref1, inView1] = useInView({
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.1,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.1,
  });

  const activeTab = () => {
    if (inView1) {
      return 1;
    }
    if (inView2 && !inView1) {
      return 2;
    }
    if (inView3 && !inView1 && !inView2) {
      return 3;
    }
    if (inView4 && !inView1 && !inView2 && !inView3) {
      return 4;
    } else {
      return 0;
    }
  };

  return (
    <>
      <main className="bg-black" inView={inView1}>
        <Navbar />
        <Hero />
        <Highlights ref1={ref1} />
        <Model3D ref2={ref2} />
        <Features ref3={ref3} />
        <ChipSet ref4={ref4} />
        <Footer />
        <NavbarBot activeTab={activeTab} />
      </main>
    </>
  );
}

export default Sentry.withProfiler(App);

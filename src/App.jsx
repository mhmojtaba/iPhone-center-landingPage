import "./App.css";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model3D from "./components/Model/Model3D";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model3D />
      </main>
    </>
  );
}

export default App;

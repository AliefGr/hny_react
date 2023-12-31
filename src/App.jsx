import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYear, setNewYear] = useState(["Bye 2023👋"]);

  const particlesInit = async (engin) => {
    await loadFireworksPreset(engin);
  };

  function timer() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remaningTime = newYearDate - nowDate;
    return remaningTime;
  }

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="flex justify-center items-center min-h-screen flex-col gap-6">
        <h1 className="z-50 text-white text-4xl font-bold">
          <Typewriter
            words={newYear}
            loop={false}
            cursorStyle="|"
            cursor
            typeSpeed={100}></Typewriter>
        </h1>
        <div className="z-50 text-white font-normal text-3xl">
          <Countdown date={Date.now() + timer()} onComplete={() => setNewYear(["Selamt", "Tahun", "Baru", "HNY 2024🎉🥳"])}/>
        </div>
        <p className="z-50 text-white bottom-20 absolute">&copy; by 💓 Alief Gymnastiar</p>
      </div>
     
    </>
  );
}
export default App;

import Welcome from "./components/Welcome/Welcome";
import Instructions from "./components/Instructions/Instructions";
import animals from "./components/App/data";
import Animal from "./components/Animal/Animal";
import "./App.css"

export default function App() {
  return (
    <>
      <Welcome />
      <Instructions />
      <div className="flex flex-row justify-between px-5 text-center divide-x-2">
        {animals.map((animal) => (
          <Animal {...animal} />
        ))}
      </div>
    </>
  );
}

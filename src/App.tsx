import Welcome from "./components/Welcome/Welcome";
import Instructions from "./components/Instructions/Instructions";
import animals from "./components/App/data";
import Animal from "./components/Animal/Animal";
import "./App.css"
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";

export default function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-50">
      <Welcome />
      <Instructions />
      <div className="flex flex-row justify-between px-5 text-center divide-x-2">
        {animals.map((animal) => (
          <div className="grid grid-rows-2"><Animal {...animal} /><AnimalStockHandler {...animal} /></div>
        ))}
      </div>
    </div>
  );
}

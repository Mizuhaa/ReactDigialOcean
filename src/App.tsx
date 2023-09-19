import Welcome from "./components/Welcome/Welcome";
import Instructions from "./components/Instructions/Instructions";
import animals from "./components/App/data";
import Animal from "./components/Animal/Animal";
import "./App.css"
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import ZooContext, { Zoo } from "./components/Zoo/Zoo";
import { useReducer } from "react";
import { IAnimal } from "./components/Animal/IAnimal";

function reducer(state: Zoo, item) {
  return[...state, item]
}


export default function App() {
  // const zoo = new Zoo("My cool zoo", [])
  const [zoo, setZoo] = useReducer(reducer, [])
  return (
    <div className="dark:bg-gray-900 dark:text-gray-50">
      <Welcome />
      <Instructions />
      <ZooContext.Provider value={{zoo, setZoo}}>
      <div className="flex flex-row justify-between px-5 text-center divide-x-2">
        {animals.map((animal) => (
          <div className="grid grid-rows-2"><Animal {...animal} /><AnimalStockHandler {...animal}/></div>
        ))}
      </div>
      </ZooContext.Provider>
    </div>
  );
}

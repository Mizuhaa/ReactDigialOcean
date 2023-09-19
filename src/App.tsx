import Welcome from "./components/Welcome/Welcome";
import Instructions from "./components/Instructions/Instructions";
import animalsDataSet from "./components/App/data";
import Animal from "./components/Animal/Animal";
import { IAnimal } from "./components/Animal/IAnimal";
import "./App.css"
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import { createContext, useState } from 'react';
import { IZoo } from "./components/Zoo/ZooContext";

export const ZooContext = createContext<IZoo>({name: "", animals: []} as IZoo)

export default function App() {
  const [animals, setAnimals] = useState({ name: "My cool zoo", animals: [] });

  return (
    <ZooContext.Provider value={animals}>
      <div className="dark:bg-gray-900 dark:text-gray-50">
        <Welcome />
        <Instructions />
        <div>
          <h1 className="capitalize underline">Liste des animaux du zoo :</h1>
          <div>
            {animals.animals.map((animal) => (
              animal
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between px-5 text-center divide-x-2">
          {animalsDataSet.map((animal) => (
            <div className="grid grid-rows-2"><Animal {...animal} /><AnimalStockHandler animal={animal}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                setAnimals([...animals, animal]);
              }}>
                Add{" "}
              </button>
            </AnimalStockHandler>
            </div>
          ))}
        </div>
      </div>
    </ZooContext.Provider>
  );
}

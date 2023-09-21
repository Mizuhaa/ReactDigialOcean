import animalsDataSet from "./components/App/data";
import { Animal as IAnimal } from "./models";
import Animal from "./components/Animal/Animal";
import "./App.css";
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import { useState } from "react";
import { ZooContext } from "./Context/ZooContext";
import ZooNamePicker from "./components/ZooNamePicker/ZooNamePicker";

export default function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [name, setName] = useState<string>("");
  return (
    <ZooContext.Provider
      value={{
        animals,
        setAnimals,
        name, 
        setName
      }}
    >
      <div className="dark:bg-gray-900 dark:text-gray-50">
        {/* <Welcome />
        <Instructions /> */}
        <div>
          <div>
            <h1 className="underline text-5xl">
              Liste des animaux du zoo {name} :
            </h1>
            <div className="p-5 text-2xl">
              {animals.map((animal) => animal.name).join(", ")}
              {<p>Total animals in the zoo : {animals.length}</p>}
            </div>
            {/* <div className="">{animals.map((animal) => animal.name)}</div> */}
          </div>
        </div>
        <h1 className="capitalize underline text-5xl p-5">Gestion du zoo</h1>
        <div className="flex flex-row justify-between px-5 text-center divide-x-2">
          {animalsDataSet.map((animal) => (
            <div className="grid grid-rows-2">
              <Animal animal={animal} />
              <AnimalStockHandler animal={animal}>
                <button
                  className="bg-emerald-300 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setAnimals([...animals, animal]);
                  }}
                >
                  Add{" "}
                </button>
              </AnimalStockHandler>
            </div>
          ))}
        </div>
        <ZooNamePicker/>
      </div>
    </ZooContext.Provider>
  );
}

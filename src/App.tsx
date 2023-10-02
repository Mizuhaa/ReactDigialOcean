import { Animal as IAnimal } from "./models";
import Animal from "./components/Animal/Animal";
import "./App.css";
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import { useState, useEffect } from "react";
import { ZooContext } from "./Context/ZooContext";
import ZooNamePicker from "./components/ZooNamePicker/ZooNamePicker";
import ZooVisitorForm from "./components/ZooVisitorForm/ZooVisitorForm";
import {
  getAnimalInformation,
  defaultSpringbok,
} from "./components/Animal/AnimalService";

export default function App() {
  useEffect(() => {
    getAnimalInformation().then((data) => setAnimals(data));
  }, []);

  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [name, setName] = useState<string>("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => setAlert(false);
    if (alert) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
    return () => window.removeEventListener("click", handleWindowClick);
  }, [alert, setAlert]);

  return (
    <ZooContext.Provider
      value={{
        animals,
        setAnimals,
        name,
        setName,
      }}
    >
      <div className="">
        <button
          type="submit"
          onClick={() => setAnimals([...animals, defaultSpringbok])}
        >
          Add springbok
        </button>
        <ZooNamePicker />
        <div>
          <h1 className="underline text-5xl">
            Liste des animaux du zoo {name} :
          </h1>
          <div className="p-5 text-2xl">
            {animals.map((animal) => animal.name).join(", ")}
            {<p>Total animals in the zoo : {animals.length}</p>}
          </div>
        </div>
        <h1 className="capitalize underline text-5xl p-5">Gestion du zoo</h1>
        <div className="grid grid-cols-3 justify-between px-5 text-center divide-x-2 basis-3">
          {animals.map((animal) => (
            <div className="">
                <Animal animal={animal} />
                <AnimalStockHandler animal={animal} />
              </div>
          ))}
        </div>
        <ZooVisitorForm />
      </div>
    </ZooContext.Provider>
  );
}

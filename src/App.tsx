import { useEffect, useState } from "react";
import "./App.css";
import { ZooContext } from "./Context/ZooContext";
import Animal from "./components/Animal/Animal";
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import animalsDataSet from "./components/App/data";
import ZooNamePicker from "./components/ZooNamePicker/ZooNamePicker";
import { ZooVisitorForm } from "./components/ZooVisitorForm/ZooVisitorForm";
import { Animal as IAnimal } from "./models";

export default function App() {
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
            <div className="dark:bg-gray-900 dark:text-gray-50">
                <ZooNamePicker />
                {/* <Welcome />
        <Instructions /> */}
                <div>
                    <div>
                        <h1 className="underline text-5xl">Liste des animaux du zoo {name} :</h1>
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
                        <div
                            className={`bg-gradient-to-t from-black/50
            w-auto h-auto
            border-2 border-red-400
            `}
                        >
                            <div className="">
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
                            <img src={animal.picture} className="-z-10" />
                        </div>
                    ))}
                </div>
                <ZooVisitorForm />
            </div>
        </ZooContext.Provider>
    );
}

import { Animal as IAnimal } from "./models";
import Animal from "./components/Animal/Animal";
import "./App.css";
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import { useState, useEffect } from "react";
import { ZooContext } from "./Context/ZooContext";
import ZooNamePicker from "./components/ZooNamePicker/ZooNamePicker";
import ZooVisitorForm from "./components/ZooVisitorForm/ZooVisitorForm";
import { getAnimalInformation } from "./components/Animal/AnimalService";
import { ThemeContext } from "./Context/ThemeContext/ThemeContext";
import ThemePicker from "./components/ThemePicker/ThemePicker";
import Header from "./components/Header/Header";
import ZooList from "./components/ZooList/ZooList";

export default function App() {
  useEffect(() => {
    getAnimalInformation().then((data) => setAnimals(data));
  }, []);

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [theme, setTheme] = useState<string>("");
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
      <ThemeContext.Provider
        value={{
          theme, setTheme
        }}>
        <Header children={<ThemePicker />} />

        <div className="dark:bg-slate-600">
          <ZooNamePicker />
          <div>
            <h1 className="underline text-5xl">
              Liste des animaux du zoo {name} :
            </h1>
            <ZooList/>
            {/* <div className="p-5 text-2xl">
              {animals.map((animal) => animal.name).join(", ")}
              {<p>Total animals in the zoo : {animals.length}</p>}
            </div> */}
          </div>
          <h1 className="capitalize underline text-5xl p-5">Gestion du zoo</h1>
          <div className="grid grid-cols-3 px-5 text-center">
            {animals.map((animal) => (
              <div className="relative m-0.5">
                <div className="bg-gradient-to-b from-gray-900/75 to-gray-100/10 absolute z-10 w-full h-full" />
                <img
                  className="absolute w-full h-full object-cover"
                  src={animal.picture}
                />
                <div className="relative z-10">
                  <Animal animal={animal} />
                  <AnimalStockHandler animal={animal} />
                </div>
              </div>
            ))}
          </div>
          <ZooVisitorForm />
        </div>
      </ThemeContext.Provider>
    </ZooContext.Provider>
  );
}

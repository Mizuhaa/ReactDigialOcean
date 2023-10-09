import { Animal as IAnimal } from "./models";
import Animal from "./components/Animal/Animal";
import "./App.css";
import AnimalStockHandler from "./components/AnimalStockHandler/AnimalStockHandler";
import { useState, useEffect } from "react";
import { ZooContext } from "./Context/ZooContext";
import ZooNamePicker from "./components/ZooNamePicker/ZooNamePicker";
import ZooVisitorForm from "./components/ZooVisitorForm/ZooVisitorForm";
import { getAnimalsInformation } from "./components/Animal/AnimalService";
import { ThemeContext } from "./Context/ThemeContext/ThemeContext";
import ThemePicker from "./components/ThemePicker/ThemePicker";
import Header from "./components/Header/Header";
import ZooList from "./components/ZooList/ZooList";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    getAnimalsInformation().then((data) => setDefaultAnimals(data));
  }, []);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [defaultAnimals, setDefaultAnimals] = useState<IAnimal[]>([]);
  const [theme, setTheme] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [alert, setAlert] = useState(false);
  const [animalSpotlightName, setSpotlightAnimalName] = useState<string>("");

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
        animalSpotlightName,
        setSpotlightAnimalName,
      }}
    >
      <ThemeContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <Header children={<ThemePicker />} />

        <div className="dark:bg-slate-600 pb-96">
          <ZooNamePicker />
          <div>
            <h1 className="underline text-5xl">
              Liste des animaux du zoo {name} :
            </h1>
            <ZooList />
          </div>
          <h1 className="capitalize underline text-5xl p-5">Gestion du zoo</h1>
          <div className="grid grid-cols-3 px-5 text-center">
            {defaultAnimals.map((animal) => (
              <div className="relative m-0.5">
                <div className="bg-gradient-to-b from-gray-900/75 to-gray-100/10 absolute z-10 w-full h-full" />
                {/* <img
                  className="absolute w-full h-full object-cover"
                  src={animal.picture}
                /> */}
                <div className="relative z-10">
                  <Animal animal={animal}>
                    <AnimalStockHandler animal={animal} />
                  </Animal>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer>
          <ZooVisitorForm />
        </Footer>
      </ThemeContext.Provider>
    </ZooContext.Provider>
  );
}

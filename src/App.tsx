import Welcome from "./components/Welcome/Welcome";
import Instructions from "./components/Instructions/Instructions";
import animals from "./components/App/data";
import Animal from "./components/Animal/Animal";

export default function App() {
  return (
    <>
      <Welcome />
      <Instructions />
      <div className="wrapperAnimaux">
        {animals.map((animal) => (
          <Animal
            name={animal.name}
            emoji={animal.emoji}
            diet={animal.diet}
            scientificName={animal.scientificName}
            size={animal.size}
            additional={animal.additional}
          />
        ))}
      </div>
    </>
  );
}

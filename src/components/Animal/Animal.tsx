import "./Animal.css";
import AnimalDetails from "../AnimalDetails/AnimailDetails";
import { IAnimal, IAnimalAdditional } from "./IAnimal";
import { IAnimalDetails } from "../AnimalDetails/IAnimalDetails";

function showAdditional(additional? : IAnimalAdditional) {
  const alertInfo = Object.entries(additional)
    .map((informations) => `${informations[0]}: ${informations[1]}`)
    .join("\n");
  alert(alertInfo);
}

export default function Animal(animal: IAnimal) {
  return (
    <div className="animaux ">
      <h2>{animal.name}</h2>
      <h4>{animal.size}</h4>
      <button onClick={() => showAdditional(animal.additional)}>
        <span role="img">{animal.emoji}</span>
      </button>
      <AnimalDetails {...animal}/>
    </div>
  );
}

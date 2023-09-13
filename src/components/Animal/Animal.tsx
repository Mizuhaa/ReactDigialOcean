import "./Animal.css";
import AnimalDetails from "../AnimalDetails/AnimailDetails";
import { IAnimal, IAnimalAdditional } from "./IAnimal";
import Card from "../Card/Card";

function showAdditional(additional?: IAnimalAdditional) {
  if (additional != undefined) {
    const alertInfo = Object.entries(additional)
      .map((informations) => `${informations[0]}: ${informations[1]}`)
      .join("\n");
    alert(alertInfo);
  }
}

export default function Animal(animal: IAnimal) {
  return (
    <Card title="Animal" details={<AnimalDetails {...animal} />}>
      <h2>{animal.name}</h2>
      <h4>{animal.size}</h4>
      <button onClick={() => showAdditional(animal.additional)}>
        <span role="img">{animal.emoji}</span>
      </button>
    </Card>
  );
}

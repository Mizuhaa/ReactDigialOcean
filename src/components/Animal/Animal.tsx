import AnimalDetails from "../AnimalDetails/AnimailDetails";
import { IAnimal, IAnimalAdditional } from "./IAnimal";
import Card from "../Card/Card";
import AnimalStockHandler from "../AnimalStockHandler/AnimalStockHandler"

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
      <div>
        <p>{animal.name}</p>
        <p>{animal.size}kg</p>
      </div>
      <button onClick={() => showAdditional(animal.additional)}>
        <span role="img">{animal.emoji}</span>
      </button>
        <div>
            <AnimalStockHandler animalName={animal.name}/>
        </div>
    </Card>
  );
}

import AnimalDetails from "../AnimalDetails/AnimailDetails";
import { AnimalAdditional, Animal as IAnimal } from "../../models";
import Card from "../Card/Card";

function showAdditional(additional?: AnimalAdditional) {
  if (additional != undefined) {
    const alertInfo = Object.entries(additional)
      .map((informations) => `${informations[0]}: ${informations[1]}`)
      .join("\n");
    alert(alertInfo);
  }
}

export default function Animal({ animal }: { animal: IAnimal }) {
  return (
    <Card title="Animal" details={<AnimalDetails animal={animal} />}>
      <div >
        <p>{animal.name}</p>
        <p>{animal.size}kg</p>
      </div>
      <button onClick={() => showAdditional(animal.additional)}>
        <span role="img">{animal.emoji}</span>
      </button>
    </Card>
  );
}

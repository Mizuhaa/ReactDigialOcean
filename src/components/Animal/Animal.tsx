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

export default function Animal({
  animal,
  children,
}: {
  animal: IAnimal;
  children: React.ReactElement[] | React.ReactElement;
}) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute">
        <Card title={animal.name} details={<AnimalDetails animal={animal} />}>
          <div>
            <div>
              <p>{animal.name}</p>
              <p>{animal.size}kg</p>
            </div>
            <button
              onSubmit={(e) => e.preventDefault()}
              onClick={() => showAdditional(animal.additional)}
            >
              <span role="img">{animal.emoji}</span>
            </button>
            {children}
          </div>
        </Card>
      </div>
      <div className="w-full bg-fuchsia-600 absolute z-40">
      <img
        className="w-full h-full"
        // src={animal.picture}
      />
      </div>
    </div>
  );
}

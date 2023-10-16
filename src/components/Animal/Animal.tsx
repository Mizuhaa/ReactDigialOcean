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
  children?: React.ReactElement[] | React.ReactElement;
}) {
  return (
    <div className="relative h-full w-full">
      <div className=" w-full h-full absolute
      bg-gradient-to-b from-gray-600/75 to-gray-100/10 dark:bg-gradient-to-b dark:from-gray-900/75 dark:to-gray-100/10 " />
      <div className="absolute h-full grid-flow-row grid">
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
          </div>
        </Card>
        <div>
          {children}
        </div>
      </div>
      <div className="w-full h-full object-cover">
        <img
          className="w-full h-full object-cover"
          src={animal.picture}
        />
      </div>
    </div>
  );
}

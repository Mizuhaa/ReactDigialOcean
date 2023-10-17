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
    <div className="relative h-full w-full min-h-[20vh] max-h-[30vh]">
    <div className="border-red-500 border-2 bg-gradient-to-b from-gray-900/75 to-gray-100/10 w-full h-full object-cover absolute"/>
      <div className="absolute h-full w-full">
        <Card title={animal.name}>
          <div className="flex flex-col min-h-max">
            <div className="grid grid-cols-2 flex-1">
              <div>
                <p>{animal.name}</p>
                <p>{animal.size}kg</p>
              </div>
              <AnimalDetails animal={animal} />
              <button
                onSubmit={(e) => e.preventDefault()}
                onClick={() => showAdditional(animal.additional)}
                className=""
              ></button>
            </div>
            <div className="flex-1 flex items-end justify-center py-4">
              {children}
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full h-full object-cover">
        <img className="w-full h-full object-cover -z-10" src={animal.picture} />
      </div>
    </div>
  );
}

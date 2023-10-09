import { useEffect, useState } from "react";
import { useZooContext } from "../../Context/ZooContext";
import AnimalSmallPickupCard from "../AnimalSmallPickupCard/AnimalSmallPickupCard";
import { getAnimalsInformation } from "../../components/Animal/AnimalService";
import { Animal as IAnimal } from "../../models";
import AnimalSpotlight from "../AnimalSpotlight/AnimalSpotlight";

export default function ZooList() {
  const { animals } = useZooContext();
  const [defaultAnimals, setDefaultAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    getAnimalsInformation().then((data) => setDefaultAnimals(data));
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="grid grid-cols-8 col-span-3">
        {defaultAnimals.map((animal) => (
          <div className="m-0.5 aspect-square">
            <AnimalSmallPickupCard animal={animal}>
              <div className="z-10 text-xl font-montserrat font-bold pb-5 text-white">
                <p>
                  {
                    animals.filter(function (element) {
                      return element.name === animal.name;
                    }).length
                  }{" "}
                  in the zoo
                </p>
              </div>
            </AnimalSmallPickupCard>
          </div>
        ))}
      </div>
      <div className="w-full h-full">
        <AnimalSpotlight/>
      </div>
    </div>
  );
}

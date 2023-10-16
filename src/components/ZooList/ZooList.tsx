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
    let mounted = true;
    getAnimalsInformation().then((data) => {
      if (mounted) {
        setDefaultAnimals(data)
      }
    });
    return () => { mounted = false }
  }, []);

  return (
    <div className="flex flex-row border">
      <div className="grid grid-cols-5">
        {defaultAnimals.map((animal) => (
          <div className="border">
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
      <div className="basis-1/3 h-full w-full relative border border-red-500">
        <AnimalSpotlight />
      </div>
    </div>
  );
}

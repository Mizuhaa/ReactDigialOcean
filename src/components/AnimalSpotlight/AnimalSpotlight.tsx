import { useState, useEffect } from "react";
import { getAnimalInformation } from "../Animal/AnimalService";
import { Animal as IAnimal } from "../../models";
import Animal from "../Animal/Animal";
import { useZooContext } from "../../Context/ZooContext";

export default function AnimalSpotlight() {
  const [animalSpotlight, setAnimalSpotlight] = useState<IAnimal>();
  const {animalSpotlightName} = useZooContext()

  useEffect(() => {
    getAnimalInformation(animalSpotlightName).then((data) => setAnimalSpotlight(data));
  }, [animalSpotlightName]);

  if (animalSpotlight !== undefined) {
    return (
      <div>
        <Animal animal={animalSpotlight} />
      </div>
    );
  } else {
    return <div>No animal in the spotlight... yet!</div>;
  }
}

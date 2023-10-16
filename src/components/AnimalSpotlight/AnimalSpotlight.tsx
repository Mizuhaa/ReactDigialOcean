import { useState, useEffect, useReducer } from "react";
import { getAnimalInformation } from "../Animal/AnimalService";
import { Animal as IAnimal } from "../../models";
import Animal from "../Animal/Animal";
import { useZooContext } from "../../Context/ZooContext";

export default function AnimalSpotlight() {
  const [animalSpotlight, setAnimalSpotlight] = useState<IAnimal>();
  const { animalSpotlightName } = useZooContext()
  const [show, toggle] = useReducer(state => !state, true)

  useEffect(() => {
    getAnimalInformation(animalSpotlightName).then((data) => setAnimalSpotlight(data));
  }, [animalSpotlightName]);

  if (animalSpotlight !== undefined) {
    return (
      <div className="relative h-full w-full">
      <button onClick={toggle}>{show && "Cacher"}{!show && "Afficher"} la mise en vedette</button>
        {show &&
          <div className="relative h-full w-full">
            <Animal animal={animalSpotlight} />
          </div>
        }
      </div>
    );
  } else {
    return <div>Pas d'animal en vedette... pour l'instant!</div>;
  }
}

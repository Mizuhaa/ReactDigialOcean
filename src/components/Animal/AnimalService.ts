import { Animal as IAnimal } from "../../models";
import data from "../App/data";

export const defaultSpringbok = {
  name: "Springbok",
  emoji: "🦌",
  scientificName: "Antidorcas marsupialis",
  size: 33,
  picture: "src/components/App/springbok.jpg",
  diet: ["plants"],
  additional: {
    notes:
      "This is the sole member of the genus Antidorcas. The springbok is the national animal of South Africa.",
    link: "https://en.wikipedia.org/wiki/Springbok",
  },
}

const allAnimals = [...data, defaultSpringbok]

export async function getAnimalsInformation() : Promise<IAnimal[]> {
  return new Promise<IAnimal[]>((resolve) => {
    setTimeout(() => {
      resolve(
        allAnimals
      );
    }, 1500);
  });
}

export async function getAnimalInformation(name: string) : Promise<IAnimal | undefined> {
  return new Promise<IAnimal | undefined>((resolve) => {
    setTimeout(() => {
      resolve(
        allAnimals.find((animal) => animal.name === name)
      );
    }, 1500);
  });
}
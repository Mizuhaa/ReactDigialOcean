import "../AnimalDetails/IAnimalDetails"
import { IAnimalDetails } from "../AnimalDetails/IAnimalDetails";

export interface IAnimal {
  name: string;
  size: number;
  emoji: string;
  additional?: IAnimalAdditional;
  details?: IAnimalDetails
}

export interface IAnimalAdditional {
  notes: string;
  link?: string;
}

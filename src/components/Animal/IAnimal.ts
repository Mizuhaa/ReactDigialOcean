import "../AnimalDetails/IAnimalDetails"

export interface IAnimal {
  name: string;
  size: number;
  emoji: string;
  additional?: IAnimalAdditional;
  diet: string[];
  scientificName: string;
}

export interface IAnimalAdditional {
  notes: string;
  link?: string;
}

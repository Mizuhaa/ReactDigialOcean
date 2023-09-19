import { IAnimal } from "../Animal/IAnimal";

export interface IZoo {
    name: string;
    animals: IAnimal[];
}

export function addToZoo(animals: IAnimal[], animal: IAnimal){
    animals.push(animal)
    return [...animals]
}

export function removeFromZoo(animals: IAnimal[], animal: IAnimal){
    animals.splice(animals.indexOf(animal))
    return [...animals]
}

export function setAnimals(){

}
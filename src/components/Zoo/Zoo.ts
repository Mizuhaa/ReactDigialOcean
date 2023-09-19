import { createContext } from 'react';
import { IAnimal } from '../Animal/IAnimal';

export class Zoo {
    name: string;
    animals: IAnimal[];

    constructor(name: string, animals: IAnimal[]){
        this.name = name;
        this.animals = animals;
    }
}

const ZooContext = createContext(new Zoo("", []));
export default ZooContext;

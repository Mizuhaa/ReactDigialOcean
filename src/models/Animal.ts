export interface Animal {
    name: string;
    size: number;
    emoji: string;
    additional?: AnimalAdditional;
    diet: string[];
    scientificName: string;
}

export interface AnimalAdditional {
    notes: string;
    link?: string;
}
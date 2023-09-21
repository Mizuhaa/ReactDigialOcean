import { createContext, useContext, useMemo, useState } from "react";
import { Animal } from "../models";

export interface IZoo {
    animals: Animal[];
    setAnimals: (animals: Animal[]) => void;
    name: string;
    setName: (name: string) => void;
}

export const ZooContext = createContext({} as IZoo);

export const ZooProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [name, setName] = useState<string>("")

    const contextValue = useMemo(() => {
        return {
            animals,
            setAnimals,
            name, 
            setName
        };
    }, [animals]);

    return <ZooContext.Provider value={contextValue}>{children}</ZooContext.Provider>;
};

export const useZooContext = () => {
    return useContext(ZooContext);
};
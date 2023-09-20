import { createContext, useContext, useMemo, useState } from "react";
import { Animal } from "../models";

export interface IZoo {
    animals: Animal[];
    setAnimals: (animals: Animal[]) => void;
}

export const ZooContext = createContext({} as IZoo);

export const ZooProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    const contextValue = useMemo(() => {
        return {
            animals,
            setAnimals,
        };
    }, [animals]);

    return <ZooContext.Provider value={contextValue}>{children}</ZooContext.Provider>;
};

export const useZooContext = () => {
    return useContext(ZooContext);
};
import { useZooContext } from "../../Context/ZooContext";
import AnimalSmallPickupCard from "../AnimalSmallPickupCard/AnimalSmallPickupCard";

export default function ZooList() {
    const { animals } = useZooContext();

    return (
        <div className="grid grid-cols-8">
            {animals.map((animal) => (
                <div className="m-0.5 aspect-square">
                    <AnimalSmallPickupCard animal={animal}>
                        <div className="z-10 text-2xl font-montserrat font-bold pb-5 text-white"><p>{animals.filter(function (element) {
                            return element.name === animal.name;
                        }).length} in the zoo</p></div>
                    </AnimalSmallPickupCard>
                </div>
            ))}
        </div>
    )
}
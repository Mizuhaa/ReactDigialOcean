import { Animal as IAnimal } from "../../models/Animal";
import AnimalSpotlightSelector from "../AnimalSpotlight/AnimalSpotlightSelector";

export default function AnimalSmallPickupCard({ animal, children }: {
    animal: IAnimal,
    children: React.ReactElement[] | React.ReactElement;
}) {
    return (
        <div className="m-0.5 w-full h-full max-h-[15rem] min-h-[5rem] max-w-[15rem] min-w-[5rem] aspect-square">
            <div className="w-full h-full relative">
                <img src={animal.picture} className="absolute w-full h-full object-cover" />
                <AnimalSpotlightSelector animalName={animal.name}/>
                <div className=" absolute bottom-0 grid grid-cols-2 w-full text-center">
                    <span className="z-10 text-2xl font-montserrat font-extrabold pb-5 text-white md:text-xl">{animal.name}</span>
                    {children}
                </div>
            </div>
        </div>
    )
}
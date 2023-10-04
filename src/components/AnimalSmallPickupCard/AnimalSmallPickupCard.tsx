import { Animal as IAnimal } from "../../models/Animal";

export default function AnimalSmallPickupCard({ animal, children }: {
    animal: IAnimal,
    children: React.ReactElement[] | React.ReactElement;
}) {
    return (
        <div className="m-0.5 w-full h-full">
            <div className="w-full h-full relative">
                <img src={animal.picture} className="absolute w-full h-full object-cover" />
                <div className=" absolute bottom-0 grid grid-cols-2 w-full text-center">
                    <span className="z-10 text-2xl font-montserrat font-extrabold pb-5 text-white md:text-xl">{animal.name}</span>
                    {children}
                </div>
            </div>
        </div>
    )
}
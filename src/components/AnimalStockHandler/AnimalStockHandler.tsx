import { IAnimal } from "../Animal/IAnimal";
import { useContext } from 'react';
import { ZooContext } from "../../App";


export default function AnimalStockHandler({ children, animal }: {
  children: React.ReactElement[] | React.ReactElement;
  animal: IAnimal;
}) {
  const animals = useContext(ZooContext)
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div>
        {<p>Total animals in {animals.name} : {animals.animals.length}</p>}
        {<p>Totaling {animals.animals.reduce((sum, current) => sum + current.size, 0)}kg</p>}
        <p>Currently {animals.animals.length} in the zoo</p>
        <div className="space-x-5">
          {children}
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromZoo({...animals}, animal)}>
            Remove{" "}
          </button> */}
        </div>
      </div>
    );
  }
}

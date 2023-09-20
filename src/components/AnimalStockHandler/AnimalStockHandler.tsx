import { Animal } from "../../models";
import { useZooContext } from "../../Context/ZooContext";


export default function AnimalStockHandler({ children, animal }: { children: React.ReactElement[] | React.ReactElement; animal: Animal; }) {
  const { animals } = useZooContext()
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div>
        {<p>Total animals in the zoo : {animals.length}</p>}
        {<p>Totaling {animals.reduce((sum, current) => sum + current.size, 0)}kg</p>}
        <p>Currently {animals.length} in the zoo</p>
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

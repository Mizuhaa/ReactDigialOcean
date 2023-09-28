import { Animal } from "../../models";
import { useZooContext } from "../../Context/ZooContext";


export default function AnimalStockHandler({ children, animal }: { children: React.ReactElement[] | React.ReactElement; animal: Animal; }) {
  const { animals } = useZooContext();
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div>
        <p>Currently {animals.filter(function (element) { return element.name === animal.name }).length} {animal.name} in the zoo</p>
        <p>Totaling {animals.filter(function (element) { return element.name === animal.name }).reduce((sum, current) => sum + current.size, 0)}kg</p>
        <div className="space-x-5">
          {children}
        </div>
      </div>
    );
  }
  else{
    return (
      <div></div>
    )
  }
}

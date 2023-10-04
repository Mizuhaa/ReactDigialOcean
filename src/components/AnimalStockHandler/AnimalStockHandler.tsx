import { Animal } from "../../models";
import { useZooContext } from "../../Context/ZooContext";

export default function AnimalStockHandler({
  animal,
}: {
  animal: Animal;
}) {
  const { animals, setAnimals } = useZooContext();
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div className="text-white flex flex-wrap flex-col">
        <div className="">
          <button
            type="submit"
            className="bg-emerald-300 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setAnimals([...animals, animal]);
            }}
          >
            Add{" "}
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

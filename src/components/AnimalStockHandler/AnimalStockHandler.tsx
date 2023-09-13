export default function AnimalStockHandler({
  animalName,
}: {
  animalName: string;
}) {
  return (
    <div className="">
      <p>Total {animalName} in stock</p>
      <p>Current {animalName} in the zoo</p>
      <div className="">
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add{" "}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Remove{" "}
        </button> */}
      </div>
    </div>
  );
}

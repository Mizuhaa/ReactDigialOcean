import { IAnimal } from "../Animal/IAnimal";
import { useState } from 'react';


export default function AnimalStockHandler(animal: IAnimal) {
  const [cart, setCart] = useState<IAnimal[]>([])
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div>
        <p>Total animals in the zoo : {cart.length}</p>
        <p>Totaling {cart.reduce((sum, current) => sum + current.size, 0)}kg</p>
        <p>Currently {cart.length} in the zoo</p>
        <div className="space-x-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {setCart([...cart, animal])}}>
            Add{" "}
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCart([])}>
            Remove{" "}
          </button>
        </div>
      </div>
    );
  }
}

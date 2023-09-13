import { convertFood } from "./AnimailDetailsHelper";
import { IAnimal } from "../Animal/IAnimal";

export default function AnimalDetails(animal: IAnimal) {
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div className="tests">
        <div>
          <p>Scientific name : {animal.scientificName}</p>
          <p>Diet : {animal.diet.map((food) => convertFood(food)).join(" ")}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        <h4>Details:</h4>
        <div>No additional informations</div>
      </div>
    );
  }
}

import "./AnimalDetails.css";
import { convertFood } from "./AnimailDetailsHelper";
import { IAnimal } from "../Animal/IAnimal";

export default function AnimalDetails(animal: IAnimal) {
  if (animal.diet != undefined && animal.scientificName != undefined) {
    return (
      <div className="details">
        <h4>Details:</h4>
        <div>Scientific name : {animal.scientificName}</div>
        <div>
          Diet : {animal.diet.map((food) => convertFood(food)).join(" ")}
        </div>
      </div>
    );
  }
  else{
    return (
        <div className="details">
          <h4>Details:</h4>
          <div>No additional informations</div>
        </div>
      );
  }
}

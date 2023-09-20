import { Animal } from "../../models";
import { convertFood } from "./AnimailDetailsHelper";

export default function AnimalDetails({ animal }: { animal: Animal }) {
    if (animal.diet.length && animal.scientificName) {
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
            <div>
                <h4>Details:</h4>
                <div>No additional informations</div>
            </div>
        );
    }
}

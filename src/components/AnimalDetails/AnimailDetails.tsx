import "./AnimalDetails.css";
import { IAnimalDetails } from "./IAnimalDetails";
import { convertFood } from "./AnimailDetailsHelper";

export default function AnimalDetails(animalDetails: IAnimalDetails){
    return(
        <div className="details">
            <h4>Details:</h4>
            <div>
                Scientific name : {animalDetails.scientificName}
            </div>
            <div>
                Diet : {animalDetails.diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}
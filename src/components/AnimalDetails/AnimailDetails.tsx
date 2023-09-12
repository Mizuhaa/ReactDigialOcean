import React from "react";
import PropTypes, { InferProps } from "prop-types";
import "./AnimalDetails.css";

function convertFood(food: string | null | undefined) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
      return "🌱";
    default:
      return "❓";
  }
}

export default function AnimalDetails({diet}: InferProps<typeof AnimalDetails.propTypes>){
    return(
        <div className="details">
            <h4>Details:</h4>
            <div>
                Diet : {diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired
}
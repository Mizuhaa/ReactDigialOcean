import React from "react";
import "./Animal.css";
import PropTypes, { InferProps } from "prop-types";
import AnimalDetails from "../AnimalDetails/AnimailDetails";

function showAdditional(additional) {
  const alertInfo = Object.entries(additional)
    .map((informations) => `${informations[0]}: ${informations[1]}`)
    .join("\n");
  alert(alertInfo);
}

// interface InterfaceAnimal {
//   name: string;
//   scientificName: string;
//   size: number;
//   diet: string[];
//   emoji: string;
//   additional: { notes: string; link: string };
// }

export default function Animal({
  name,
  scientificName,
  size,
  additional,
  emoji,
  ...props
}: InferProps<typeof Animal.propTypes>) {
  return (
    <div className="animaux ">
      <h2>{name}</h2>
      <h3>{scientificName}</h3>
      <h4>{size}</h4>
      <button onClick={() => showAdditional(additional)}>
        <span role="img">{emoji}</span>
      </button>
      <AnimalDetails {...props}/>
    </div>
  );
}

Animal.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  emoji: PropTypes.string.isRequired,
};

Animal.defaultProps = {
  additional: {
    notes: "No more infos",
  },
};

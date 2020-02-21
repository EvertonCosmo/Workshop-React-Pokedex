import React from "react";
import { fixNames, padNumber } from "../../util";
const BASE_NAME = "";
const PokemonImage = ({ size, name, id }) => {
  return (
    <div style={{ padding: 20 }}>
      <img
        src={`${BASE_NAME}/pokemons/${padNumber(id, 3)}-${fixNames(name)}.svg`}
        height={size}
        width={100}
        alt={name}
      />
    </div>
  );
};

export default PokemonImage;

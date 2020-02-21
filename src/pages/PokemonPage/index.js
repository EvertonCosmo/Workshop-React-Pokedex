import React, { Fragment } from "react";
import PokemonImage from "../../components/PokemonImage";
import { padNumber } from "../../util";

const PokemonPage = ({ location }) => {
  console.log(location);
  const { state } = location;
  return (
    <Fragment>
      <div className="columns">
        <div className="column">
          <PokemonImage id={state.id} name={state.name} size={200} />
        </div>
        <h2
          className="subtitle is-2 has-text-weight-light"
          style={{ display: "inline-block" }}
        >
          #{padNumber(state.id)}
        </h2>
      </div>
    </Fragment>
  );
};

export default PokemonPage;

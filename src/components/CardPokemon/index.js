import React from "react";
import { Link } from "react-router-dom";
import PokemonImage from "../PokemonImage";
import { padNumber } from "../../util";
import "./index.css";
const CardCustomer = ({ id, name }) => {
  return (
    <div className="container column is-3">
      <div className="card has-text-centered">
        <Link
          to={{ pathname: `/pokemon/${padNumber(id, 3)}`, state: { name, id } }}
        >
          <div className="card-image has-background-light">
            {/* <i className="material-icons fav">favorite_border</i> */}
            <PokemonImage id={id} name={name} />
          </div>
          <div className="card-content">
            <h1 className="title is-4 is-capitalized">{name}</h1>
            <p className="subtitle is-6">#{padNumber(id, 3)}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default CardCustomer;

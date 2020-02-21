import React, { useEffect, useState, Fragment } from "react";
import "./index.css";
import api from "../../services/api";
import CardPokemon from "../../components/CardPokemon";
import Header from "../../components/Header";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  //function which is called the first time the component loads
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    api
      .get("/pokemon?limit=493")
      .then(response => {
        console.log(response.data);

        setUsers(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <Fragment>
      {users.length === 0 ? (
        <h1>sem pokémons</h1>
      ) : (
        <div className="columns is-multiline">
          {users.map((data, index) => {
            return <CardPokemon key={index} id={index + 1} name={data.name} />;
          })}
        </div>
      )}
    </Fragment>
  );
};
export default HomePage;

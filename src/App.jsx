import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { Btn } from "./btn";
import "./styles.css";

export const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }, [page]);

  console.log(page);

  return (
    <>
      <Btn page={page} setPage={setPage} />
      <div className="container">
        {personajes.map((personaje, i) => {
          return (
            <Card
              key={i}
              img={personaje.image}
              name={personaje.name}
              status={personaje.status}
              species={personaje.species}
            />
          );
        })}
      </div>
    </>
  );
};

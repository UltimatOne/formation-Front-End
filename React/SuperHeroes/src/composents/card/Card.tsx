import React from "react";
import { Link } from "react-router-dom";
import SuperHeros from "../../models/superHeros";


type CardProps = {
  superHeros: SuperHeros
};

const Card: React.FC<CardProps> = ({ superHeros }) => {
  return (
    <Link to={`/${superHeros.id}`}>
    <div className="card">
      <img src={superHeros.image} alt={superHeros.name} />
      <h1>
        {superHeros.id}. {superHeros.name}, de son vrai nom {superHeros.civil}.
      </h1>
      <h2>
        Habite à {superHeros.ville} et est âgé de {superHeros.age}ans.
      </h2>
    </div>
    </Link>
  );
};

export default Card;
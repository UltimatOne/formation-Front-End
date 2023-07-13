import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../composents/card/Card";
import SuperHeros from "../models/superHeros";
import HeroService from "../services/heroService";
import "./herosListe.css";

const HerosLists: React.FC = () => {
  const [herosList, setHerosList] = useState<SuperHeros[]>([]);

  useEffect(() => {
    HeroService.getHeroes().then((data) => setHerosList(data));
  }, []);

  return (
    <div className="heroList">
      {herosList.map((hero) => (
        <Card key={hero.id} superHeros={hero} />
      ))}
      <Link to="/ajout">
        <button>Ajouter un héros</button>
      </Link>
    </div>
  );
};

export default HerosLists;

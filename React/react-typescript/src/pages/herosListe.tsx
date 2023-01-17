import React, { useEffect, useState } from "react";
import Card from "../composents/card/Card";
import SuperHerosList from "../data/superHerosList";
import SuperHeros from "../models/superHeros";
import "./herosListe.css";

const HerosLists: React.FC = () => {
  const [herosList, setHerosList] = useState<SuperHeros[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/heros")
      .then((response) => response.json())
      .then((data) => {
        setHerosList(SuperHerosList);
      });
  }, []);

  return (
    <div className="heroList">
      {herosList.map((hero) => (
        <Card key={hero.id} superHeros={hero} />
      ))}
    </div>
  );
};

export default HerosLists;

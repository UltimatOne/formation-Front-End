import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import  SuperHerosList  from "../data/superHerosList";
import Heros from "../models/heros";
import "./herosListe.css";

const HerosLists: React.FC = () => {
  const [heroList, setHeroList] = useState<Heros[]>([]);

  useEffect(() => {
    setHeroList(SuperHerosList);
  }, []);

  return (
    <div className="heroList">
      {heroList.map((hero: Heros) => 
          <Card
            key={hero.id}
            id={hero.id}
            name={hero.name}
            image={hero.image}
            civil={hero.civil}
            age={hero.age}
            ville={hero.ville}
          />
      )
}
    </div>
  );
};

export default HerosLists;

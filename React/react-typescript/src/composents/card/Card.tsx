import React from "react";


type CardProps = {
  id: number;
  name: string;
  image: string;
  civil: string;
  age: number;
  ville: string;
};

const Card: React.FC<CardProps> = ({ id, name, image, civil, age, ville }) => {
  return (
    <div className="card">
      <h1>
        {id}. {name}, de son vrai nom {civil}.
      </h1>
      <h2>
        Habite à {ville} et est âgé de {age}ans.
      </h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
import { useState } from "react";
import SuperHeros from "../../models/superHeros";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./herosForm.css";
import HeroService from "../../services/heroService";
type props = {
  hero: SuperHeros;
  edit: boolean;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  image: champ;
  name: champ;
  civil: champ;
  age: champ;
  ville: champ;
};
const HerosForm: React.FC<props> = ({ hero, edit }) => {
  const [form, setForm] = useState<Form>({
    image: {
      value: hero.image,
    },
    name: {
      value: hero.name,
      isValid: true,
    },
    civil: {
      value: hero.civil,
      isValid: true,
    },
    age: {
      value: hero.age,
      isValid: true,
    },
    ville: {
      value: hero.ville,
      isValid: true,
    },
  });

  const redirection = useNavigate();

  const editHeros = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    hero.name = form.name.value;
    hero.age = form.age.value;
    hero.civil = form.civil.value;
    hero.ville = form.ville.value;
    edit ? maj() : ajout();
  };
  const ajout = () => {
    HeroService.ajoutHeros(hero);
    redirection("/");
  };

  const maj = () => {
    HeroService.majHeros(hero).then(() => redirection(`/${hero.id}`));
  };

  const suprHeros = () => {
    HeroService.suprHeros(hero);
    redirection("/");
  };

  return (
    <div className="formContainer">
      <form onSubmit={soumission}>
        <div className="inputContainer">
          {edit ? (
            <div>
              <img src={hero.image} alt={hero.name} />
              <button onClick={suprHeros} className="bouton">
                Supprimer
              </button>
              {""}
            </div>
          ) : (
            <>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                value={form.image.value}
                onChange={editHeros}
                placeholder="Url de votre image"
              />
            </>
          )}

          <label htmlFor="name"> Nom: </label>
          <input
            type="text"
            name="name"
            value={form.name.value}
            onChange={editHeros}
            placeholder="Le nom de votre héro"
          />

          <label htmlFor="age"> Age: </label>
          <input
            type="number"
            name="age"
            value={form.age.value}
            onChange={editHeros}
            placeholder="L'age' de votre héro"
          />

          <label htmlFor="ville"> Ville: </label>
          <input
            type="text"
            name="ville"
            value={form.ville.value}
            onChange={editHeros}
            placeholder="Lea ville de votre héro"
          />

          <label htmlFor="civil"> Identité secrète: </label>
          <input
            type="text"
            name="civil"
            value={form.civil.value}
            onChange={editHeros}
            placeholder="L'identité secrete de votre héro"
          />

          <input type="submit" value="Envoyer" className="bouton" />
        </div>
      </form>
    </div>
  );
};

export default HerosForm;

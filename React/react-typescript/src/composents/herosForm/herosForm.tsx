import { useState } from "react";
import SuperHeros from '../../models/superHeros';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { RecordWithTtl } from "dns";
type props = {
    hero: SuperHeros;
};

type champ = {
    value?: any;
    error?: string;
    isValid?: boolean;
};

type Form = {
    name: champ;
    civil: champ; 
    age: champ; 
    ville: champ; 
}
const HerosForm: React.FC<props> = ({ hero }) => {
    const [form, setForm] = useState<Form>(
        {
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
            }
        });

        const redirection = useNavigate();

        const editHeros = (event: React.ChangeEvent<HTMLInputElement>) => {
            const nomDuChamp : string = event.target.name;
            const valeurDuChamp : string = event.target.value;
            const nouveauChamp : champ = { [nomDuChamp]: { valeur: valeurDuChamp}};
            setForm({...form, ...nouveauChamp});
        };

        const soumission = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(form);
            redirection(`/${hero.id}`)
        }
 
    return (
        <form onSubmit={soumission}>
            <img src={hero.image} alt={hero.name} />
            <label htmlFor="name"> Nom: </label>
            <input type="text" name="name" value={form.name.value} onChange={editHeros}/>

            <label htmlFor="age"> Age: </label>
            <input type="number" name="age" value={form.age.value} onChange={editHeros}/>

            <label htmlFor="ville"> Ville: </label>
            <input type="text" name="ville" value={form.ville.value} onChange={editHeros}/>

            <label htmlFor="civil"> Identité secrète: </label>
            <input type="text" name="civil" value={form.civil.value} onChange={editHeros}/>

            <input type="submit" value="Envoyer"/>
        </form>
    );
};

export default HerosForm;
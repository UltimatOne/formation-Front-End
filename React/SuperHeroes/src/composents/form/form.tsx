import { useEffect, useState } from "react"

const Form: React.FC = () => {
    const [personne, setPersonne] = useState<string>("");

    useEffect(() => {
        console.log(personne);
    }, [personne])
    const changePersonne = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonne(event.target.value);
        
    };
    const soumettre = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Le formulaire est envoyé')
    }
    return (
        <form onSubmit={soumettre}>
            <label htmlFor="nom">Nom: </label>
            <input type="text" id="name" name="nom" value={personne} onChange={changePersonne}/>
            <input type="submit" value="Envoyer"/>
        </form>
    );
}
export default Form;
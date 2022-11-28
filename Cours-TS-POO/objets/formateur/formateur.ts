class Formateur {
    nom: string;
    prenom: string;
}

let formateur1: Formateur = new Formateur();

formateur1.nom = "Devos";
formateur1.prenom = "Alex";

console.log(`${formateur1.nom} ${formateur1.prenom} est le formateur.`)
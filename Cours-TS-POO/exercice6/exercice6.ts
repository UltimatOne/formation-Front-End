//Bulletin : nom du gars, notes
//Calculer la moyenne
    //vérifier note
        //Si note inférieur à 0 et supérieur à 20 : pas prise en compte
    //Additionner toutes les valeurs et diviser par le nombre de note
    //retourner la moyenne
//Définir la mention
    //Si c'est inférieur à 4 : Catastrophe
    //inférieur à 10 : Insuffisant
    //Inférieur à 14 : Passable
    //Inférieur à 18 : Bien
    //inférieur à 20 : Très bien


/**
 * 
 * @param note fonction qui vérifie que la note est bien comprise entre 0 et 20
 * @returns 
 */
function verifierNote(note: number): boolean {
    if (note < 0 || note > 20) {
        return false;
    } else {
        return true;
    }
}


function calculerMoyenne (...notes :number[]) :number{
    let moyenne = 0;
    for(let note of notes){
        if (verifierNote(note)){
            moyenne += note;
        } else {
            console.log(`La note ${note} est ignorée car non valide !`)
        }
        
    }
    return moyenne / notes.length;
}

function definirMention(moyenne: number): string {
    if (moyenne < 4){
        return "Castatrophique"
    } else if (moyenne < 10) {
        return "Insuffisant"
    } else if (moyenne < 14) {
        return "Passable"
    } else if (moyenne < 18){
        return "Bien"
    }else {
        return "Très bien"
    }
}

function Bulletin(nomEleve: string, ...notes: number[]): string {
    let moyenne: number = calculerMoyenne(...notes)
    let mention = definirMention(moyenne)
    return `${nomEleve} a une moyenne de ${moyenne}, son travail est donc ${mention}`
}
/**
 * cette fonction permet de comparer 3 nombres pour afficher le plus grand
 * @param nbr1 valeur du chiffre 1
 * @param nbr2 valeur du chiffre 2
 * @param nbr3 valeur du chiffre 3
 * @returns renvoie le plus grand chiffre
 */


function compare(nbr1:number, nbr2:number, nbr3:number) :string {
    let result :string = "";
    if (nbr1 > nbr2 && nbr1 > nbr3){
        result = `Le plus grand nombre est ${nbr1}`
    }else if (nbr2 > nbr1 && nbr2 > nbr3){
        result = `Le plus grand nombre est ${nbr2}`
    }else{
        result = `Le plus grand nombre est ${nbr3}`
    };
    return result
}
const comparaison :string = compare(14, 15 , 25);
console.log (comparaison);
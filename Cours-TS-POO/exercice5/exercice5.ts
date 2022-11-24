/**
 * ompare les chiffres (non défini au départ) dans un tableau "lePlusGrand"
 * @param nbr tableau de chiffres indéfini
 * @returns retourne le chiffre le plus grand du tableau
 */


function lePlusGrand(...nbr:number[]):number{
    let max :number = 0;
    for (let iterator = 0; iterator < nbr.length; iterator++){
        if (nbr[iterator] > max){
            max = nbr[iterator]
        };
    }
    return max
}
console.log (lePlusGrand(1, 150 , 55, 60, 300, 250, 500, 100))
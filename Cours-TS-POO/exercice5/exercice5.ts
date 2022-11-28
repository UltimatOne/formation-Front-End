/**
 * ompare les chiffres (non défini au départ) dans un tableau "lePlusGrand"
 * @param nbr tableau de chiffres indéfini
 * @returns retourne le chiffre le plus grand du tableau
 */


function lePlusGrand(...nombres:number[]):number{
    let max :number = 0;
    for (let iterator = 0; iterator < nombres.length; iterator++){
        if (nombres[iterator] > max){
            max = nombres[iterator]
        };
    }
    return max;
}
console.log (`Le chiffre le plus grand est ${lePlusGrand(1, 150 , 55, 60, 300, 250, 500, 100)}`)
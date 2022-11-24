


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
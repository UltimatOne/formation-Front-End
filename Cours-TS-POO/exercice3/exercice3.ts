/**
 * fonction qui calcule le bénéfice d'une vente de produit
 * @param pdv prix de vente du produit
 * @param pdf prix de fabrication du produit
 * @returns gain ou perte
 */
function calc (pdv:number, pdf:number) :string {
    let result :string = "";

    ( pdv < pdf)? result = `Perte de ${pdf - pdv}€`: result = `gain de ${pdv - pdf}€`;

    return result
}
const var3: string = calc(20, 10)
console.log (calc(5, 10))
console.log (var3)
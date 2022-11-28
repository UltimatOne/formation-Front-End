function monnaie(nombre: number): void {
    const monnaies: number[] = [
        500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01
    ];

    for (let monnaie of monnaies) {
        let nombreMonnaies = Math.floor(nombre / monnaie);
        if (monnaie !== 0){
            if(monnaie >= 5){
                console.log(`Billet(s) de ${monnaie}€ : ${nombreMonnaies}`)
            } else {
                console.log(`Pièces(s) de ${monnaie}€ : ${nombreMonnaies}`)
            }
            nombre -= nombreMonnaies * monnaie;
        }
    }
}

monnaie(888.89);
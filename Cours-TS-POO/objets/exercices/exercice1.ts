const chat = {
    nom: "Maho",
    race: "chat de gouttièrre",
    age: 6,
    poid: 9,
    
};

function retourneChat (...surnoms: string[]){
    let listeSurnoms = surnoms.map(surnom => `${surnom}`).join(", ");
    console.log (`Nom du chat: ${chat.nom}, sa race est ${chat.race} il à ${chat.age} ans et pèse ${chat.poid} et ses surnoms sont ${listeSurnoms}`);
};
    retourneChat('Minou', 'rouquin', 'SDF');
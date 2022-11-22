console.log("Hello World!!!");

/*let /*const nom = "Sofiane";*/
/*{
let nom = "Miloud";
console.log(nom);
}
nom = "Lamia"
console.log(nom);

/* const permet d'empeceher le changement de valeur */

/*let number = 25;
number ++ /*++ ici est egale a +1: affiche number + 1 */
/*console.log(number);*/

// Camel Case : maFonctionADeclarer
// PAscal Case: MaFonction
// Snake Case : ma_fonction

// function maFonction(number) {
//     return console.log(number);
// }
// maFonction(5);
// maFonction(6);
// maFonction(10);
// maFonction(15);
// maFonction(20);

// exercice 1
// 1er façon
// let nom = prompt("Veuillez entrer votre nom")

// console.log = alert(`Bienvenue ${nom}`)

// 2eme façon
// function nom(nom){
//     return console.log(`Bienvenue ${nom}`);
// }
// nom("emilie");
// nom("Lily");

// console.log("Hello World!");
// string: "une chaine de caracteres"
// number: 5
// boolean: true or false

// tableau: [25,"france",[23, "italie"], {nom: "Luigi"}];
// object: {
//     nom: "Luigi";
//     prenomDeLaStagiaire: "Laura"
// }

// let nombre1 = 5;
// let nombre2 = 22;
// let nombre3 = (nombre1 + nombre2);
// console.log (nombre3);

// let nombre1 = parseInt (
//     prompt ("entrez un chiffre"));

// let nombre2 = parseInt (
//     prompt ("entrez un autre chiffre"));

// let nombre3 = (nombre1 + nombre2);
// prompt (`${nombre1} + ${nombre2} = ${nombre3}`);

function calc() {
  let nombre1 = Number(document.getElementById("num1").value);
  let nombre2 = Number(document.getElementById("num2").value);
  document.getElementById("reponse").innerHTML = nombre1 + nombre2;
  console.log(nombre1, nombre2);
}
//09/11/2022

/*let age = Number (prompt('entrez votre age'));

if (age >= 18) {
    console.log("je suis majeur");
}
else if (age <18 ){
    console.log("Je suis mineur");
}
else {
    console.log ("je suis au bord de la mort!");
}*/

4; //verifier un palindrome

function verifier() {
  let mot = document.getElementById("mot").value.toLowerCase();
  let motInverse = mot.split("").reverse("").join("");
  if (mot === motInverse) {
    document.getElementById("reponse1").innerHTML = "c'est un palindrome";
  } else {
    document.getElementById("reponse1").innerHTML =
      "ce n'est pas un palindrome";
  }
}

//syntaxe alternative en terner sans affichage html...
/*function palindrome(mot1) {
    let minuscule = mot1.toLowerCase()
    minuscule === minuscule.split("").reverse().join("") &&
    console.log("Je suis un palindrome");
}
palindrome("toto");*/

/** */
//pour declarer un tableau on utilise [] on peut declarer plusieurs elements en separant avec une ","
let tableau = ["Chien", "Chat", "Oiseau", "Lapin"];
console.log(tableau); //affiche le tableau dans la console
console.log(tableau[2]); //on affiche dans la console l'entree 2, ici Oiseau rappel "Chien, ici, est l'entree 0"
tableau.push("Poulet"); //ajoute une entree a la fin du tableau
tableau.unshift("dinde"); //ajoute un element au debut du tableau sans ecraser le 1er element
console.log(tableau);
tableau.shift(tableau); //supprime le 1er element du tableau
console.log(tableau);
tableau.pop(tableau); //supprime le dernier element du tableau
console.log(tableau);

//on récupère un événement
/*const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");*/
let input = document.querySelector("input");
let select = document.querySelector("#monSelect");
let result = document.querySelector("p");

/*h2.innerText = "Clique-moi";
h2.addEventListener("click", (event) => {
  h2.style.color = "purple";
});
h2.addEventListener("mouseout", (event) => {
  h2.style.color = "yellow";
});

h1.innerText = "Survole-moi avec la souris";
h1.addEventListener("mouseover", (event) => {
  h1.style.color = "blue";
});
h1.addEventListener("mouseout", (event) => {
  h1.style.color = "red";
});

const bouton1 = document.createElement("button");
bouton1.innerText = "+";
bouton1.style.background = "black";
bouton1.style.color = "white";
bouton1.style.borderRadius = "3px";
bouton1.style.borderColor = "grey";
bouton1.style.width = "50px";
document.body.appendChild(bouton1);
let i = 0;
bouton1.addEventListener("click", (event) => {
  i++;
  if (i == 21) {
    i = 20;
  }
  resultat.innerText = `resultat: ${i}`;
});
const resultat = document.createElement("p");
resultat.style.color = "lightgreen";
resultat.innerText = `resultat: ${i}`;
document.body.appendChild(resultat);

const bouton2 = document.createElement("button");
bouton2.innerText = "-";
bouton2.style.background = "red";
bouton2.style.color = "white";
bouton2.style.borderRadius = "3px";
bouton2.style.borderColor = "red";
bouton2.style.width = "50px";
bouton2.addEventListener("click", (event) => {
  i--;
  if (i == -1) {
    i = 0;
  }
  resultat.innerText = `resultat: ${i}`;
});

document.body.appendChild(bouton2);

const btnreset = document.createElement("button");
btnreset.innerText = "Reset";
btnreset.style.background = "orange";
btnreset.style.color = "white";
btnreset.style.borderRadius = "3px";
btnreset.style.borderColor = "yellow";
btnreset.style.width = "50px";
btnreset.addEventListener("click", (event) => {
  i = 0;
  resultat.innerText = `resultat: ${i}`;
});

document.body.appendChild(btnreset);

let div = document.querySelector("div");
let compteur = document.createElement("p");
div.append(compteur);
compteur.innerText = "0";
compteur.style.background = "black";
compteur.style.color = "white";
compteur.style.textAlign = "center";

let button = document.createElement("button");
div.prepend(button);
button.innerText = "+1";
button.style.background = "green";
let compte = 0;
button.addEventListener("mousedown", (event) => {
  compte++;
  compteur.innerHTML = compte;
});*/

//Définition des variables
let compteurParent = 0;
let compteurEnfant = 0;

//Récupération des éléments
const divParent = document.querySelector("#parent");
const boutonEnfant = document.querySelector("#enfant");
const body = document.querySelector("body");

//récupération des éléments pour afficher les compteurs
const spanParentCompteur = document.querySelector("#parent-compteur");
const spanEnfantCompteur = document.querySelector("#enfant-compteur");

//Event pour écouter le click sur la div
divParent.addEventListener("click", (event) => {
  compteurParent++;
  spanParentCompteur.innerHTML = compteurParent;
});

//Event pour écouter le click sur le bouton
boutonEnfant.addEventListener("click", (event) => {
  //stop propagation pour que ca n'influe pas sur l'élément parent
  event.stopPropagation();
  compteurEnfant++;
  spanEnfantCompteur.innerHTML = compteurEnfant;
});

//les formulaires:
input.addEventListener("change", (event) => {
  let valeur = event.target.value;
  console.log(valeur);
});
select.addEventListener("change", (event) => {
  let valeurSelect = event.target.value;
  result.innerHTML = `Vous aimez le ${valeurSelect}!`;
  body.append(result);
});

//on récup les données element du formulaire
let form = document.forms[0].elements;
// création d'une variable vide qui contiendra notre objet
let user = {};
//on selectionne la div qui recevra le résultat
let divResult = document.querySelector("#result");
//on récup notre bouton submit
let submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => { 
    event.preventDefault();

//on récup d'abord les mots de passe pour les comparer
let password = form["password"].value;
console.log(password)
let password2 = form["password2"].value;
console.log(password2)
//on crée une méthode qui m'affiche mon user si mot de passe concorde
if (checkPassword(password, password2)) {
  user.nom = form["nom"].value;
  user.prénom = form["prenom"].value;
  user.email = form["email"].value;
  user.password = form["password"].value;
  divResult.innerText = JSON.stringify(user);
} else {
    form["password"].value = "";
  form["password2"].value = "";
  alert("Les mots de passe ne correspondent pas");
}
});
/**
 * 
 * @param {string} password 
 * @param {string} password2 
 * @returns boolean
 */

function checkPassword(password, password2){
    if (password != password2 || password == "" || password2 == ""){
    return false;
} else {
    return true;
}};

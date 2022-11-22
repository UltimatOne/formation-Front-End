//Définition des variables
let compteurParent = 0;
let compteurEnfant = 0;
let input = document.querySelector("input");
let select = document.querySelector("#monSelect");
let result2 = document.querySelector("p");

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
let result = document.querySelector('.result')
select.addEventListener("change", (event) => {
  let valeurSelect = event.target.value;
  result2.innerHTML = `Vous aimez le ${valeurSelect}!`;
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
let password2 = form["password2"].value;
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
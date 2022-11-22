
/*const h1 = document.createElement("h1");
h1.innerText = "Coucou";
body.append(h1);*/

/*attention avec innerHTML il est possible d'injecter du script directement dans la page html. il est préférable d'utiliser innerText!!!
body.append(div);*/
//const div = document.createElement("div");
//div.innerHTML = "<h1>Coucou</h1>";
//body.append(div);

//faire une fonction pour ne pas avoir à réécrire le code plusieurs fois...
//function element(balise, contenu) {
  //const b = document.createElement(balise);
  //b.innerText = contenu;
  //body.append(b);
//}
//element("div", "<h1>Coucou</h1>");
//element("p", "Bienvenue chez Ib");

//création d'un tableau élève:
/*const eleves = [
{
  nom: "Joudet",
  prenom: "Nathan",
  age: 22,
},
{
    nom: "Hotton",
    prenom: "Robin",
    age: 22,
},
{
    nom: "Boudedja",
    prenom: "Lamia",
    age: 18,
},
];*/


/*injection du tableau dans un paragraphe de la page html
en créant le paragraphe*/
//1ere methode
//let divEleve = document.querySelector("#eleve");
//divEleve.innerHTML = `<p>${eleve.nom} ${eleve.prenom} ${eleve.age}</p>`;

//2eme méthode avec destructuration
//const { nom, prenom, age } = eleve; //destructuration
//let divEleve = document.querySelector("#eleve");
//divEleve.innerHTML = `<p>${nom} ${prenom} ${age}</p>`;
 /* il n'est plus necessaire d'ecrire eleve.nom etc.*/

 //1ere methode injecter tableau en innerHTML (sale)
 /*let divEleve = document.querySelector("#eleve");
 let liste = document.createElement("ul");
 divEleve.append(liste);*/
 //let liEleve = "";
 //for (let i= 0; i < eleves.length; i++){
 //   let eleve = eleves[i]
  //  liEleve += `<li> ${eleve.prenom} ${eleve.nom} ${eleve.age}</li>`;
 //};
 //liste.innerHTML = liEleve;
 
 //2eme méthode évite l'injection de code en innerHtml (propre)
 /*for (let i= 0; i < eleves.length; i++){
    let puce = document.createElement("li");
    puce.innerText = `${eleves[i].prenom} ${eleves[i].nom} ${eleves[i].age}`;
liste.append(puce)};*/

//modifier les classes avec classlist
//creer une classe dans une balise ici h1
//h1.classList.add("titre1")
//supprimer une classe
//h1.classList.remove("titre1")

// .contains permet de vérifier la présence d'une classe
/*const h1 = document.querySelector("h1");
const verif = h1.classList.contains("titre1")*/

// .replace permet de remplacer une classe


const body = document.querySelector("body");
const doc = document.querySelector(".essai");
let titreP = document.querySelector("h1");

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for ( let i = 0; i < 6; i++ ){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function getFontSize(){
    const fontNumber = '123456789';
    let  fontChaine = '';
    for (let i = 0; i < 2; i++){
        fontChaine += fontNumber[Math.floor(Math.random()* 9)];
    }
    fontChaine += 'px';
    return fontChaine;
};
function spaceLetter(){
    const letterSpace = '123456789';
    let espace = '';
    for (let i= 0; i < 2; i++){
        espace += letterSpace[Math.floor(Math.random()* 9)]
    }
    espace += 'px';
    return espace;
}
function change(){
    titreP.innerText = "JavaScript";
    doc.innerText = "Animations";
    titreP.style.letterSpacing = spaceLetter();
    titreP.style.color = getRandomColor();
    doc.style.letterSpacing = spaceLetter();
    doc.style.fontSize = getFontSize();
    doc.style.color = getRandomColor();
    body.style.backgroundColor = getRandomColor();
};
setInterval(change, 2000);
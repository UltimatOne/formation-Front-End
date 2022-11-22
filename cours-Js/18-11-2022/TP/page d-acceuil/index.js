let body = document.querySelector('body');
body.style.height = '640px';

let sautDeLigne1 = document.createElement('br');
let sautDeLigne2 = document.createElement('br');
let sautDeLigne3 = document.createElement('br');
let sautDeLigne4 = document.createElement('br');
let sautDeLigne5 = document.createElement('br');
let sautDeLigne6 = document.createElement('br');
let sautDeLigne7 = document.createElement('br');
let sautDeLigne8 = document.createElement('br');

//nav
const nav = document.createElement('nav');
nav.style.display = 'flex'
nav.style.backgroundColor = 'grey';
nav.style.height = "15%";
nav.style.width = "100%";
let listeNav = document.createElement('ul');
nav.append(listeNav);
let laListe = document.createElement('li');
let horloge = document.createElement('li');
let fizzbuzz = document.createElement('li');
let fizzbuzzPlus = document.createElement('li');
listeNav.append(laListe, horloge, fizzbuzz, fizzbuzzPlus);

let lienLaListe = document.createElement('a');
let contenuLienLaListe = document.createTextNode('La liste');
lienLaListe.href = '#carte1';
lienLaListe.append(contenuLienLaListe)
laListe.append(lienLaListe);

let lienHorloge = document.createElement('a')
let contenuLienHorloge = document.createTextNode('Horloge');
lienHorloge.href = '#carte2';
lienHorloge.append(contenuLienHorloge)
horloge.append(lienHorloge)

let lienFizzbuzz = document.createElement('a')
let contenuLienFizzbuzz = document.createTextNode('FizzBuzz');
lienFizzbuzz.href = '#carte3';
lienFizzbuzz.append(contenuLienFizzbuzz)
fizzbuzz.append(lienFizzbuzz)

let lienFizzbuzzPlus = document.createElement('a')
let contenuLienFizzbuzzPlus = document.createTextNode('FizzBuzz Plus');
lienFizzbuzzPlus.href = '#carte4';
lienFizzbuzzPlus.append(contenuLienFizzbuzzPlus);
fizzbuzzPlus.append(lienFizzbuzzPlus);

let conteneur = document.createElement('div')
conteneur.id = 'conteneur';
conteneur.style.width = '25%';
conteneur.style.height = '85%';
conteneur.style.margin = '2px'
body.append(nav, conteneur);

//carte 1
const carte1 = document.createElement(`div`);
carte1.style.textAlign = 'center';
carte1.id = 'carte1';
carte1.style.background = "black";
carte1.style.color = "white";
carte1.style.width = "100%";
carte1.style.height = "50%";
let span1Carte1 = document.createElement('span');
carte1.appendChild(span1Carte1);
let titreSpan1Carte1 = document.createElement('h1');
let contenuTitreSpan1Carte1 = document.createTextNode('La liste');
span1Carte1.appendChild(titreSpan1Carte1);
titreSpan1Carte1.appendChild(contenuTitreSpan1Carte1);
let span2Carte1 = document.createElement('span');
let paragrapheSpan2Carte1 = document.createElement('p');
let contenuParagrapheSpan2Carte1 = document.createTextNode('Injecté en JS');
carte1.appendChild(span2Carte1);
span2Carte1.appendChild(paragrapheSpan2Carte1);
paragrapheSpan2Carte1.appendChild(contenuParagrapheSpan2Carte1);
carte1.appendChild(sautDeLigne1);
carte1.appendChild(sautDeLigne2);
lienCarte1 = document.createElement(`a`);
lienCarte1.href = './../la-liste/liste.html';
contenuLienCarte1 = document.createTextNode('La Liste');
carte1.appendChild(lienCarte1);
lienCarte1.appendChild(contenuLienCarte1);


//carte 2
const carte2 = document.createElement(`div`);
carte2.style.textAlign = 'center';
carte2.id = 'carte2';
carte2.style.background = "green";
carte2.style.color = "white";
carte2.style.width = "100%";
carte2.style.height = "50%";
let span1Carte2 = document.createElement('span');
carte2.appendChild(span1Carte2);
let titreSpan1Carte2 = document.createElement('h1');
let contenuTitreSpan1Carte2 = document.createTextNode('Horloge');
span1Carte2.appendChild(titreSpan1Carte2);
titreSpan1Carte2.appendChild(contenuTitreSpan1Carte2);
let span2Carte2 = document.createElement('span');
let paragrapheSpan2Carte2 = document.createElement('p');
let contenuParagrapheSpan2Carte2 = document.createTextNode('Injecté en JS');
carte2.appendChild(span2Carte2);
span2Carte2.appendChild(paragrapheSpan2Carte2);
paragrapheSpan2Carte2.appendChild(contenuParagrapheSpan2Carte2);
carte2.appendChild(sautDeLigne3);
carte2.appendChild(sautDeLigne4);
lienCarte2 = document.createElement(`a`);
lienCarte2.href = './../horloge/horloge.html';
contenuLienCarte2 = document.createTextNode('Horloge');
carte2.appendChild(lienCarte2);
lienCarte2.appendChild(contenuLienCarte2);


//carte 3
const carte3 = document.createElement(`div`);
carte3.style.textAlign = 'center';
carte3.id = 'carte3';
carte3.style.background = "orange";
carte3.style.color = "white";
carte3.style.width = "100%";
carte3.style.height = "50%";
let span1Carte3 = document.createElement('span');
carte3.appendChild(span1Carte3);
let titreSpan1Carte3 = document.createElement('h1');
let contenuTitreSpan1Carte3 = document.createTextNode('FizzBuzz');
span1Carte3.appendChild(titreSpan1Carte3);
titreSpan1Carte3.appendChild(contenuTitreSpan1Carte3);
let span2Carte3 = document.createElement('span');
let paragrapheSpan2Carte3 = document.createElement('p');
let contenuParagrapheSpan2Carte3 = document.createTextNode('Injecté en JS');
carte3.appendChild(span2Carte3);
span2Carte3.appendChild(paragrapheSpan2Carte3);
paragrapheSpan2Carte3.appendChild(contenuParagrapheSpan2Carte3)
carte3.appendChild(sautDeLigne5);
carte3.appendChild(sautDeLigne6);
lienCarte3 = document.createElement(`a`);
lienCarte3.href = './../fizzbuzz/fizzbuzz.html';
contenuLienCarte3 = document.createTextNode('FizzBuzz');
carte3.appendChild(lienCarte3);
lienCarte3.appendChild(contenuLienCarte3);


// carte 4
const carte4 = document.createElement(`div`);
carte4.style.textAlign = 'center';
carte4.id = 'carte4';
carte4.style.background = "purple";
carte4.style.color = "white";
carte4.style.width = "100%";
carte4.style.height = "50%";
let span1Carte4 = document.createElement('span');
carte4.appendChild(span1Carte4);
let titreSpan1Carte4 = document.createElement('h1');
let contenuTitreSpan1Carte4 = document.createTextNode('FizzBuzz Plus');
span1Carte4.appendChild(titreSpan1Carte4);
titreSpan1Carte4.appendChild(contenuTitreSpan1Carte4);
let span2Carte4 = document.createElement('span');
let paragrapheSpan2Carte4 = document.createElement('p');
let contenuParagrapheSpan2Carte4 = document.createTextNode('Injecté en JS');
carte4.appendChild(span2Carte4);
span2Carte4.appendChild(paragrapheSpan2Carte4);
paragrapheSpan2Carte4.appendChild(contenuParagrapheSpan2Carte4)
carte4.appendChild(sautDeLigne7);
carte4.appendChild(sautDeLigne8);
lienCarte4 = document.createElement(`a`);
lienCarte4.href = './../fizzbuzzplus/fizzbuzzplus.html';
contenuLienCarte4 = document.createTextNode('FizzBuzz Plus');
carte4.appendChild(lienCarte4);
lienCarte4.appendChild(contenuLienCarte4);
conteneur.append(carte1, carte2, carte3, carte4);
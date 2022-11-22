//1ere version

/*let body = document.querySelector('body');

function heure() {
    let Maintenant = new Date();
    let heures = Maintenant.getHours();
    let minutes = Maintenant.getMinutes();
    let secondes = Maintenant.getSeconds();
    heures = ((heures < 10) ? " 0" : " ") + heures;
    minutes = ((minutes < 10) ? ":0" : ":") + minutes;
    secondes = ((secondes < 10) ? ":0" : ":") + secondes;
    document.formhorloge.horloge.value = heures + minutes + secondes;
    setTimeout("heure()",1000);
    };
    body.innerHTML = `<form name="formhorloge" onSubmit="0">
    <div>
    <input type="text" name="horloge" size=4 value="">
    </div>
    </form>`
    body.onload = heure();*/


                 /*------------------*/



//2eme version avec les consignes de l'exercice

//appel la balise body dans JavaScript pour les manipulations
let body = document.querySelector('body');

//rend body flexible
body.style.display = 'flex';
body.style.fontSize = '100%';

//donne une hauteur à body
body.style.height = '500px';

//créer une balise form
const form = document.createElement('form');
//donne un nom à la form
form.name = 'horloge';
//bord arroundis pour form
form.style.borderRadius = '7%';
//couleur de fond de form
form.style.backgroundColor = '#DAAE68';
//hauteur de form
form.style.height = '12%';
//largeur de div
form.style.width = '67%';
//rend form flexible pour centrer les éléments a l'intérieur
form.style.display = 'flex';
//centre form sur la page
form.style.margin = 'auto';
//marge interne form
form.style.padding = "0.5%";
//ajoute une ombre a form
form.style.boxShadow = '10px 10px 5px 0px rgba(0,0,0,0.5)';

//injecte form dans body
body.appendChild(form);

//affiche form dans la console
console.log (form);

// créer une balise div
const div = document.createElement('div');
//donne un nom à la div
div.name = 'date';
//value de div
div.value = "";
//bord arroundis pour div
div.style.borderRadius = '7%';
//couleur de fond de div
div.style.backgroundColor = 'grey';
//hauteur de div
div.style.height = '85%';
//largeur de div
div.style.width = '90%';
//rend div flexible pour centrer les éléments a l'intérieur
div.style.display = 'flex';
//centre div dans form
div.style.margin = 'auto';
//marge interne div
div.style.padding = "0.5%";

//injecte div dans form
form.appendChild(div);
console.log(div)

//créer une balise input
const input = document.createElement('input');
//nom à input
input.name = 'ecran';
//type de input
input.type = 'text';
input.style.display = 'flex';
//largeur de input
input.style.width = '90%'
//value de input
input.value= '';
//bord arroundis pour input
input.style.borderRadius = '15%';
//centre input dans div
input.style.margin = 'auto';
//hauteur de input
input.style.height = "70%";
//centre le texte dans input
input.style.textAlign = 'center';
//couleur de fond de input
input.style.backgroundColor = 'green';
//couleur du texte de input
input.style.color = 'red';
//taille du text dans input
input.style.fontSize = '3em';
//marge interne input
input.style.padding = "1%";

//injecte input dans div
div.appendChild(input);



//début de la fonction heure
function heure() {
    let Maintenant = new Date();
    let heures = Maintenant.getHours();
    let minutes = Maintenant.getMinutes();
    let secondes = Maintenant.getSeconds();
    if (heures < 10){
       heures = ("0" + heures);
    } else {
       heures = ("" + heures);
    };
    //cette condition écrite en ternaire => heures = ((heures < 10) ? "0" : "") + heures;
    
    if (minutes < 10){
        minutes = (":0" + minutes);
    } else {
        minutes = (':' + minutes);
    };
    //cette condition écrite en ternaire => minutes = ((minutes < 10) ? ":0" : ":") + minutes;
    
    if (secondes < 10){
        secondes = (':0' + secondes)
    } else {
        secondes = (':' + secondes)
    };
    //cette condition écrite en ternaire => secondes = ((secondes < 10) ? ":0" : ":") + secondes;

    //on précise que heures + minutes + secondes sont les valeurs de l'élément portant le nom ecran qui est dans l'element portant le nom horloge
    document.horloge.ecran.value = heures + minutes + secondes;


    //on demande de raffraichir toutes les secondes 
    setTimeout("heure()",1000);
    };//fin de la fonction heure
//injecte la fonction et la lance    
input.onload = heure();







    
    
   
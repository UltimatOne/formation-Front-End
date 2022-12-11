import "./bonjour.css";

function Bonjour({nom, prenom, pseudo, titre}){
    return <h1>Bonjour {[pseudo, titre]}!!!</h1>;
}
export default Bonjour;
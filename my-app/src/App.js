import "./app.css";
import Contact from "./components/contacts/contact";
import Bonjour from "./components/bonjour/bonjour"
function App() {
  const paragraphe = true;
  const personnes = [{
    nom: "Contact",
    prenom: "1",
    mail: "contact1@aol.com",
    Tel: "0600000001",
  },
  {
    nom: "Contact",
    prenom: "1",
    mail: "contact1@aol.com",
    Tel: "0600000001",
  },
  {
    nom: "Contact",
    prenom: "1",
    mail: "contact1@aol.com",
    Tel: "0600000001",
  },
  {
    nom: "Contact",
    prenom: "1",
    mail: "contact1@aol.com",
    Tel: "0600000001",
  } ,
  {
    nom: "Contact",
    prenom: "1",
    mail: "contact1@aol.com",
    Tel: "0600000001",
  }];
return (
<>
  <Bonjour/>
  <h1 className= {paragraphe ? "para" : "dauphin"}>Mes Contacts</h1>
  {paragraphe ? <p>Je suis un dauphin</p> : <p>Jes suis une licorne</p>}
  {personnes.map((personne) => (<Contact {...personne}/>))} 
</>
  );
}

export default App;

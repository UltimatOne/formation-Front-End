import "./app.css";
import Carte from "./components/contacts/carte"
import Bonjour from "./components/bonjour/bonjour"


function App() {
  const paragraphe = true;
  const personnes = [{
    nom: "Contact",
    prenom: "1",
    mail: "contact1@aol.com",
    Tel: "0600000001",
    button: false
  },
  {
    nom: "Contact",
    prenom: "2",
    mail: "contact2@aol.com",
    Tel: "0600000002",
    button: true
  },
  {
    nom: "Contact",
    prenom: "3",
    mail: "contact3@aol.com",
    Tel: "0600000003",
    button: true
  },
  {
    nom: "Contact",
    prenom: "4",
    mail: "contact4@aol.com",
    Tel: "0600000004",
    button: true
  } ,
  {
    nom: "Contact",
    prenom: "5",
    mail: "contact5@aol.com",
    Tel: "0600000005",
    button: true
  }];
return (
<>
  <Bonjour/>
  <h1 className= {paragraphe ? "para" : "dauphin"}>Mes Contacts</h1>
  {paragraphe ? <p>Je suis un dauphin</p> : <p>Jes suis une licorne</p>}
  {personnes.map((personne) => (<Carte {...personne}/>))} 
</>
  );
}

export default App;

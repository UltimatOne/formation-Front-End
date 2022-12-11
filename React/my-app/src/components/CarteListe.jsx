import Carte from "./carte";
import { personnes, paragraphe } from "../Contacts/dataContacts";
export default function CarteListe() {
  return (
    <>
      <h1 className={!paragraphe ? "para" : "dauphin"}>Mes Contacts</h1>
      {!paragraphe ? <p>Je suis un dauphin</p> : <p>Jes suis une licorne</p>}
      {personnes.map((personne) => (
        <Carte {...personne} />
      ))}
    </>
  );
}

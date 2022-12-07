import { personnages } from "../contenus/personnages/personnages"
import Saiyans from "../contenus/saiyans"

export default function Contenu1(){
   return (
    <div id="test1">
        {personnages.map((personnage) => (
        <Saiyans {...personnage} />
      ))}
    </div>
)}
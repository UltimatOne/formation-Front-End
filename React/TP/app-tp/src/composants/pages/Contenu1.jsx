import { personnages } from "../contenus/personnages/personnages"
import Saiyans from "../contenus/saiyans"

export default function Contenu1(){
   return (
    <div>
        {personnages.map((personnage) => (
        <Saiyans {...personnage} />
      ))}
    </div>
)}
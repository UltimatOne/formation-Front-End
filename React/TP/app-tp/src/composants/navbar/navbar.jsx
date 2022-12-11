import { Link } from "react-router-dom"
import "./navbar.css"
import accueil from "./../pages/accueil.png"
export default function Navbar(){
    return(
    <div className="styleNavbar">
        <Link to={"/accueil"}><img src={accueil} id="Maison" alt="Acceuil"/></Link>
        <Link to={"/contenu1"}>Saiyans</Link>
        <Link to={"/contenu2"}>Contenu 2</Link>
        <Link to={"/contenu3"}>Contenu 3</Link>
    </div>
)}
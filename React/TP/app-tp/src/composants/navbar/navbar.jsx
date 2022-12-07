import { Link } from "react-router-dom"
import "./navbar.css"
export default function Navbar(){
    return(
    <div className="styleNavbar">
        <Link to={"/accueil"}><h1>Accueil</h1></Link>
        <Link to={"/contenu1"}>Contenu 1</Link>
        <Link to={"/contenu2"}>Contenu 2</Link>
        <Link to={"/contenu3"}>Contenu 3</Link>
    </div>
)}
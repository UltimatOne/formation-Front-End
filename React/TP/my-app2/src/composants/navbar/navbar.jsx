import "./navbar.css"
import Bonjour from "./../../fonctions/bonjour";
import Logo from "../logo/logo";
function Navbar(){
    return (
    <div id="navbar">
        <Logo />
        <Bonjour pseudo="Ultimat" titre=" Le Challenger"/>
    </div>
)};
export default Navbar;
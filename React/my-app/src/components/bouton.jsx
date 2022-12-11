

export default function Bouton( { active, change }){
    return (
        <button onClick={change} className={active ? "dark" : "red"}>{active ? "on" : "off"}</button>
    )
}
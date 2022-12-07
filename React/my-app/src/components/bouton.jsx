

export default function Bouton( { active, change }){
    return (
        <button onClick={change} className={active ? "green" : "red"}>{active ? "on" : "off"}</button>
    )
}
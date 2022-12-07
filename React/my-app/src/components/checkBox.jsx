export default function CheckBox({etat}){
    return (
        <>
        {etat ? <input type="checkbox" checked/> : <input type="checkbox" />}
        </>
    )
}
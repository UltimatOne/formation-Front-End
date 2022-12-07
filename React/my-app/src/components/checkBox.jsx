import React from "react";

export default function CheckBox({active, change}){
    return (
 <input type="checkbox" checked={active} onChange={change}/>
    )
}
import { useState } from "react";
import { React } from "react";
import CheckBox from "./checkBox";
import Bouton from "./bouton";

export default function Carte(props) {
  const [count, setCount] = useState(0);
  const clickP = () => { setCount(count+1) };
  const clickM = () => { setCount(count-1) };


  const [on, setOn] = useState(false);
  const change = () => { setOn(!on)}

  
  return (
    <div class="card">
      <div class="container">
        <h4><b>{props.nom}</b></h4>
        <p>{props.prenom}</p>
        <p>{props.mail}</p>
        <p>{props.tel}</p>
        <p>{count}</p>

        {props.button ? <button onClick= {clickP}>+ 1</button>: <button onClick={clickM}>- 1</button>}
        {props.button ? <button onClick= {clickM}>- 1</button>: <button onClick={clickP}>+ 1</button>}

        <CheckBox active={on} change={change}/>
        <Bouton active={on} change={change}/>
      </div>
    </div>
  );
}
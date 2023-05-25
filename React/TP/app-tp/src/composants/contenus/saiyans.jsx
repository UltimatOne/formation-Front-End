import React from 'react'
import "./saiyans.css"
function Saiyans({nom, classeDeCombat, type, sexe}) {
  return (
    <div id="saiyans">
      <h1>{nom}</h1>
      <h3>Classe de combat: {classeDeCombat}</h3>
      <h4>Catégorie: {type}
          <br />
        Sexe: {sexe}
      </h4>
    </div>
  )
}

export default Saiyans
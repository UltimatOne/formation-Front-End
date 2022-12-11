import React from 'react'
import "./saiyans.css"
function Saiyans({nom, classeDeCombat, type, sexe}) {
  return (
    <div id="saiyans">
      <h1>{nom}</h1>
      <h3>{classeDeCombat}</h3>
      <h4>
        {type}
          <br />
        {sexe}
      </h4>
    </div>
  )
}

export default Saiyans
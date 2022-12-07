import React from 'react'

function Saiyans({nom, classeDeCombat, type, sexe}) {
  return (
    <div>
      <h3>{nom}</h3>
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
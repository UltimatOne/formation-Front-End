Poney Fighter !
Démonstration improvisée sur un combat de poneys en arène qui met pratique les concepts suivants :

Héritage,
Agrégation,
Abstraction,
Polymorphisme,
Encapsulation
Lancer
Clonez le répo : git clone https://github.com/AlexDvsSemifir/PoneyFigther.git

Créez vos instances dans index.ts, puis exécutez les.

Dépendances
Node
TypeScript
Suggestions
ts-node
Diagramme
@startuml

abstract class Poney {
  nom: str
  age: number
  pv: number
  niveau: number
  attaqueBasique()
  distribuerDeLAmour()

}

class Arene {
  lancerCombat()
  definirVainqueur()
}

Arene "0..1" o-- "0..2"  Poney

interface Magique {
  pm: number
  attaqueMagique()

}

interface Guerrier {
  energie: number
  attaquePuissance()
}

class PoneyMage extends Poney implements Magique {

}

class PoneyGuerrier extends Poney implements Guerrier {

}

enum Couleurs {

}

Poney "1" *-- "1..*" Couleurs

@enduml
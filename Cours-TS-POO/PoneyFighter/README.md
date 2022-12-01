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

//www.plantuml.com/plantuml/dpng/TP11ImCn48Nl-HLXJofqiHvxgbOGGQ4dxxFRrpAGJEeaAKhnlpljrgqMF6KoCz-RnvldGbfg38wwN9Jwulj0EVjb4dpkdQGuypPmjC7CIuqTr6rtOocy0zNnIwNGUyK3PRRdwjgjs63kAlGHBnHJLMj-EJSSkLS8_Du5aXwwIB6ZSe2mPc5z8nPJ-K66vUQsRQUDJvF9iRnh1gVEiHJecdhuLzgmSQQxZPVEJhD1yNb4dYfK6MeC1BfXN8BBoZcRpHFwAoIJXCT7WQnE7Szn6n0X9P_D_8N6W_-2Pqj6mipuHQe1LVEnC-mt5iND8OffspRZWfkRP8tX6m00
import Terrestre from './../Interfaces/Terrestre';
import Mammifere from './Abstrait/Mammifere';

class Chat extends Mammifere implements Terrestre{
    display(){
        console.log (`il s'appelle ${this._nom}, il pèse ${this._poids} et il à ${this.age}`)
    }
    respirerHorDeLeau(): void{};

    marcher(): void{};
    
    miauler(): void{};

   };
   
   export default Chat;
import Arene from "./classes/Arene";
import PoneyGuerrier from "./classes/PoneyGuerrier";
import PoneyMage from "./classes/PoneyMage";

const player1: PoneyGuerrier = new PoneyGuerrier("FlutterShy", new Date(), 20);
const player2: PoneyMage = new PoneyMage("Foulindra", new Date(), 20);

const arena: Arene = new Arene();

arena.lancerCombat(player1, player2);
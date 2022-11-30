import Chat from './Classes/Chat';

const chat = new Chat('Bébou 5', 5, new Date('2022/08/23'));

chat.miauler();
chat.ajouterCouleur('rouge', 'mauve');
chat.supprimerCouleur('mauve');
chat.display();
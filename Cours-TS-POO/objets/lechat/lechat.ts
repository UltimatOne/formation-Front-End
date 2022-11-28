class Chat {
    nom!: string;
    race!: string;
    age!: number;
    poids!: number;
  
    afficherChat(): void {
      console.log(`
              Mon super chat s'appelle ${this.nom} \r
              C'est un ${this.race} \r
              Il a ${this.age} an(s) \r
              Et il pèse ${this.poids} kg ! 
          `);
    }
  }
  
  const monChat: Chat = new Chat();
  
  monChat.age = 2;
  monChat.nom = "Bébou 2";
  monChat.poids = 50;
  monChat.race = "Clochard";
  
  monChat.afficherChat();
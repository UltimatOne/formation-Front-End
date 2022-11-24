# Git + GitHub - Exercice 2

Type: Exercice

---

## 🪢 Exercice 2 / Branches et Merges

### 😶‍🌫️ A. First Branch - inter-fichier

1. Créez une branche 'Dev' et positionnez vous dessus.
2. Créez un fichier 'poneys.txt' dans lequel vous préciserez [les noms des personnages de la série 'Friendship is Magic](https://www.animationsource.org/petit_poney/fr/info_chars/&id_film=126)' : 
    - [Princess Twilight Sparkle](https://en.wikipedia.org/wiki/List_of_My_Little_Pony:_Friendship_Is_Magic_characters#Princess_Twilight_Sparkle)
    - [Spike](https://en.wikipedia.org/wiki/List_of_My_Little_Pony:_Friendship_Is_Magic_characters#Spike)
    - [Applejack](https://en.wikipedia.org/wiki/List_of_My_Little_Pony:_Friendship_Is_Magic_characters#Applejack)
    - [Rainbow Dash](https://en.wikipedia.org/wiki/List_of_My_Little_Pony:_Friendship_Is_Magic_characters#Rainbow_Dash)
    - [Pinkie Pie](https://en.wikipedia.org/wiki/List_of_My_Little_Pony:_Friendship_Is_Magic_characters#Pinkie_Pie)
    - [Rarity](https://en.wikipedia.org/wiki/List_of_My_Little_Pony:_Friendship_Is_Magic_characters#Rarity)
3. Faites un commit et replacez vous sur la branche master. Vous constaterez que votre fichier n'est pas présent

### 👯‍♂️ B. First Branch - intra-fichier

1. Positionnez vous sur votre branche 'Dev'
2. Ajoutez la ligne `unicormeMode = 1` au fichier `__script__.py`
3. Sauvegardez, commitez, et replacez vous sur la branche master. Vous constaterez que votre ligne n'est plus présente.
4. Replacez vous sur votre branche 'Dev', la ligne sera alors revenue

### 🌀 C. First Merge

1. Positionnez vous sur votre branche 'master'. 
2. Uilisez la commande associée pour fusionner le contenu devotre branche Dev vers votre branche Master. 
3. Modifiez `maPremiereFusion = 0` et pssez la variable à `1`. Faites un commit.
4. Repositionnez vous sur votre branche Dev, et modifiez `maPremiereErreur = 0` à 1.
5. Faites une nouvelle fusion depuis la branche 'master'. Vous aurez normalement une erreur. 
6. Corrigez les erreurs pour valider votre merge.
    1. NB : Par défaut, l'éditeur '[vi](https://www.cs.colostate.edu/helpdocs/vi.html)' s'ouvrira. Si vous utilisez VS Code, les corrections seront réalisables directement dans l'IDE 😍
7. Ajoutez un alias au commit de votre branche 'master' que vous nommerez 'V1.0.0'. 

---
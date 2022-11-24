# Git + GitHub - Exercice 3

Type: Exercice

---

## 🕸️ Exercice 3 / Go online !

### 🐙 A. Créez votre compte Github

1. Rendez-vous sur [GitHub.com](http://GitHub.com) 
2. Créez votre compte si vous n'en avez pas, puis connectez vous. 
3. Créez un dépot **public** (laissez les options par défaut) que vous appelerez "Baby_Git_Steps_*<votre nom>*" Après avoir validé, une page va s'afficher.
4. Suivez les instructions présentes dans la page de confirmation pour **envoyer votre projet sur le repository** que vous venez de créer.

### 🦑 B. Bonus : Git Kraken

1. Créez votre compte sur [GitKraken](https://www.gitkraken.com/)
    1. Vous pouvez vous autolog avec votre compte GitHub
2. Utilisez la version gratuite (7 jours d'essai). 
3. Importez votre projet 'Baby-Git-Steps' dans Kraken
4. Prenez le temps de vous familiariser avec l'environnement. Notez que les branches sont visibles graphiquement, comme avec la commande `gitk` 
5. Créez un dossier 'Captures' à la racine de votre projet. 
6. Créez une capture d'écran de vos branches sur Kraken que vous nommerez 'capt-3.b' et ajoutez la capture dans le dossier 'Captures'

<aside>
❤️ NB Il existe d'autres outils graphiques comme [Git-Fork](https://git-fork.com/).

</aside>

<aside>
❤️ Le but de cet exercice est surtout de vous permettre de faire des screens de vos branches. Si vous préférez utiliser l’addon vs code “Git Graph”, libre à vous ! Du moment que vous êtes en mesure de screen les graphs de vos branches !

</aside>

### 🔄 C. Remote VS local

1. Faites un commit pour sauvegarder vos modifications.
2. Vous constaterez que votre dossier 'captures' n'est pas présent sur votre repositoty GitHub
3. Utilisez la commande qui permet d'envoyer vos modifications sur le serveur. 
    1. NB : n'oubliez pas d'ajouter le répertoire à l'index au préalable 😛
4. Vérifiez que tout correspond bien.

### 🙏 D. Be collaborative

1. Formez des groupes de 2. Partagez le lien de votre répository GitHub à votre binôme. 
2. Ajoutez le compte de votre binôme en tant que collaborateur sur GitHub
3. Protégez votre branche “main” contre les push sauvages
4. Clonez le contenu de **son** repository sur votre machine
5. Vérifiez que la synchronisation est opérationnelle
6. ➡️ Positionnez vous sur **son** projet !
7. Créer une branche portant votre nom
8. Editez son fichier README et ajoutez : 
    1. Un sous titre 'Témoignage' dans 'Présentation'
    2. Rédigez une petite phrase gentille au sujet de votre binôme.
9. Faites votre commit, puis faites un 'pull [request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)' sur depuis la page GitHub de votre binôme

### 😱 E. Have fun !

1. Une fois que votre binôme vous aura envoyé son 'pull request', analysez la. 
2. Corrigez les erreurs, puis validez la demande une fois que tout sera OK. 
3. Quand votre binôme aura validé vos changements sur son projet, utilisez GitKraken (ou git graph) pour faire une capture de l'état actuel de ses branches et ajoutez là dans son dossier 'captures' avec l'appellation 'capt-3.c'

### 💔 F. Tout casser !

1. Sur la branche 'Dev', supprimez tout le contenu de "poneys.txt" et remplacez le par *"Fausse manip : CHEH !"*
2. Faites un commit (sans oublier le changelog) suivi d'un push. 
3. Lorsque votre binôme en aura fait autant :
    1. Rendez vous sur **votre** GitHub
    2. Validez son push
    3. Constatez le problème
    4. Faite un `revert` pour annuler ses changements
4. Constatez que le contenu du fichier est bien revenu
5. Rendez vous sur GitKraken et regardez les différents commit. Faites ensuite une capture et ajoutez la à votre dossier capture. Changelog, commit, push.

### G. Aller plus loin

Complétez les exercices de Learn Git Branching : 

[Learn Git Branching](https://learngitbranching.js.org/)
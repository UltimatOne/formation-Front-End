# Git + GitHub - Exercice 1

Type: Exercice

## 👍 Exercice 1 / Création d'un dépôt local et premier commit

### ℹ️ A. Quelques conventions :

1. Creér un répertoire `DEV` à la racine de son disque dure
2. Créer un sous-répertoire `FORMATION_GIT`

### 📁 B. Initialier le dossier :

1. Ouvrez votre terminal et placez vous dans votre répertoire de travail.
    1. NB : Vous pouvez aussi utiliser votre IDE préféré (ex : [VS Code](https://code.visualstudio.com/download)) et ouvrir votre répertoire depuis ce dernier
2. Utilisez la commande pour initialiser git.
3. Vérifiez la présence du dossier .git dans votre répertoire
    1. NB : Par défaut, le dossier est caché ! 

### 🗺️ C. Création de l'arborescence :

1. Créez un fichier `.gitignore` par défaut pour Python :
    
    [gitignore.io](https://www.toptal.com/developers/gitignore)
    
2. Créer un fichier `README.md`
3. Créer un fichier `__main__.py` contenant un simple Hello World

### 🧾 D. Complétez le fichier README

Informations à indiquer dans votre README pour cet exercice : 

- Titre : Baby_Git_Steps
    - Sous titre : Présentation du projet
    - Sous titre : Présentation du codeur
        - Sous-sous titre : Présentation
            - Présentez vous en quelques lignes. Essayez d'être un peu fun 🥳

<aside>
❗ Le contenu du README.md est à compléter tout au long des exercices !

</aside>

### 🥷 E. Créez un fichier .gitignore

1. Créez un dossier que vous nommerez 'bin'
2. Dans ce dossier, créez un document texte apelé "un_fichier_exe_qui_pese_3go.txt"
    1. Dans le fichier ajoutez une ligne "Oulala que je pèse lourd"
3. Ajoutez votre dossier “bin” dans .gitignore
    1. Créez un commentaire pour structurer la liste de vos fichiers "Pour ce projet uniquement :" 

### 📨 F. Premier envoi sur GIT !

1. Ajoutez vos fichiers à l'index. Pour rappel :
    1. `ADD *` n'envoie pas les fichiers vides.
2. Faites votre premier commit que vous nommerez `initial commit`
3. Editez votre fichier `__script__.py` et remplacez son contenu par le suivant : 
    1. code : 
    
    ```python
    monPremierCommit = 1
    maPremiereBranche = 0
    maPremiereFusion = 0
    maPremiereErreur = 0
    ```
    
4. Comparez les différences avec la commande associée
5. Réalisez un nouveau commit en le nommant correctement. 
6. Vous constaterez que votre dossier 'bin' n'a pas été ajouté à l'index.

### J. J'ai glissé chef

1. Retournez sur votre `__script__.py` et ajoutez une ligne : 
"jeVaisMalNommerMonProchaonCommit = 1"
2. Faites un commit que vous nommerez "commit1"
3. Utilisez la commande associée pour renommer correctement votre commit. 

---
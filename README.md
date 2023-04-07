# Brief n°5 Tamagochi

## Création d'un tamagotchi-like 

# Livrables

 - Maquettes du projet : https://www.figma.com/file/3OmSVjLgKCzZkeRRNO8maX/Untitled?node-id=0%3A1&t=9CjxVT1IiMmnoE0N-1
Trello à jour : https://trello.com/b/jxbe9CYH/brief-5
Un dépôt Git contenant le projet au complet 
Un rendu Simplonline avec un lien vers le dépôt Git + maquettes + Trello

> ## Comment lancer le projet depuis votre terminal

<br/>

```
git clone git@github.com:SpaceRag/Brief5.git
cd Brief5
npm install
npx parcel src/index.html
```

> ## Cahier des charges du projet:

<br/>

> ### Fonctionnel

- L’utilisateur arrive sur un écran d’accueil, celui-ci contient un formulaire pour saisir le nom de son compagnon et sélectionner le type de compagnon qu’il souhaite jouer.

- Il lance le jeu à l’aide d’un bouton “commercer”.

- Les personnages ont trois jauges indiquant le niveau d’un besoin (par exemple : bonheur, soif et faim). Vous êtes libre de changer l’intitulé des jauges et chaque compagnon à au moins une de ces trois jauges qui lui est propre.

- Le niveau des jauges baisse automatiquement et chaque jauge dispose d’un bouton pour l’alimenter.

- Lorsque les trois jauges tombent à zéro l’utilisateur à perdu.

> ### Technique

<br/>

- Votre jeu comporte à minima une classe parente et deux classes enfants qui l'étendent.

- Les compagnons à disposition de l’utilisateur sont vos classes enfants, exemple :

- Classe parent (l’utilisateur ne peut pas la jouer) : Dog

- Classes enfants (l’utilisateur peut les jouer) : Labrador et Dalmatien

- Les jauges du compagnon commencent à 100% lorsque le jeu démarre et diminuent de la manière suivante :
  - diminue de 10% entre 50% et 100% de point de vie
  - diminue de 6% entre 15% et 50% de point de vie
  - diminue de 2% entre 0% et 15% de point de vie
  - L’utilisateur peut alimenter les jauges à l’aide d’un bouton qui augmente la jauge de 10%, la jauge ne peut pas dépasser les 100%.
# NodeJs Twitter
NodeJs twitter est un projet pour réécrire certaines des fonctionnalités de Twitter en utilisant une chaîne d'outils moderne basée sur javascript. Il s'agit principalement d'un projet pour apprendre Node.js, Express.js et MongoDB.

## Prérequis
Vous devez avoir installé Node.js et MongoDB si vous souhaitez exécuter l'application en local.
Node.Js  **v14.15.1**

## Usage
     ~/ git clone https://github.com/GauthierLory/nodejs-twitter
     ~/ cd ./ nodejs-twitter
     ## Installe les dépendances
     ~/ npm install
     ## Build le fichier de tailwind
     ~/ npx tailwindcss-cli@latest build ./styles/styles.css -o ./public/css/app.css
     ## Lance l'app
     ~/ npm start

La configuration se trouve a `la racine`. Veuillez créer votre propre fichier `.env`. Vous pouvez trouver un exemple de fichier `.env` dans `.env.example`.

 ## Fonctionnalités
 - [x] Inscription et connexion de l'utilisateur
 - [ ] Modification de profil de l'utilisateur
	 - [ ] Nom prénom email
	 - [x] Photo
	 - [ ] Modification du mot de passe
	 - [ ] Mot de passe oublié 
 - [x] Création de tweet
 - [x] Modification de tweet
 - [x] Suppression de tweet
 - [x] Possibilité de "Follow" ou de "Unfollow" un utilisateur
 - [x] Protection de routes
 - [x] Visiter le profil d'un utilisateur

## Important
Twitter est une marque déposée de Twitter Inc. Ce projet est destiné à des fins d'apprentissage et doit être traité comme tel.
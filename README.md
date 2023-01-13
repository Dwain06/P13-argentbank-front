# Projet 13 OpenClassrooms : appli bancaire avec espace client - Argent Bank API
#### _Interface avec login relié à une API_

 [![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://forthebadge.com)

## Getting Started

### Prerequisites
This codebase contains the front code of Argent Bank. It's necessary to start the back for the application to be fully functional.
Follow the installation instructions in the Readme file to run back api here : https://github.com/Dwain06/P13-argentbank-back

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local server
npm start
```

Your server should now be running at http://locahost:3000/

5. You could signin with a new user or login with email `tony@stark.com` and password `password123`.

## Objectif
##### Phase 1 : 
Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et de gérer leurs comptes et leur profil.
##### Phase 2 :
Transactions - Spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission une fois que nous aurons terminé la première.

## Fonctionnalités :
##### Pour la phase 1 :
- Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
- Utiliser Redux pour gérer le state de l'ensemble de l'application.
- Ce que doit faire l’application :
    - L'utilisateur peut visiter la page d'accueil
    - L'utilisateur peut se connecter au système
    - L'utilisateur peut se déconnecter du système
    - L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
    - L'utilisateur peut modifier le profil et conserver les données dans la base de données.

##### Pour la phase 2 :
Nous sommes encore en phase de conception. De notre côté, nous mettons au point une fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :
- de visualiser toutes leurs transactions pour le mois en cours ;
- de visualiser les détails d'une transaction dans une autre vue ;
- d'ajouter, de modifier ou de supprimer des informations sur une transaction.

Puisque vous gérez déjà l'application web pour la phase 1, nous voulons connaître votre avis sur la façon dont vous pensez que les API devraient être modélisées du côté back end. Nous avons besoin que vous nous fournissiez un document décrivant les API proposées pour les transactions, en suivant les directives de Swagger. 
Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :

- La méthode HTTP (ex. : GET, POST, etc.)
- La route (ex. : /store/inventory)
- La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
- Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
- Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

Document disponible ici : https://github.com/Dwain06/P13-argentbank-back/blob/master/swagger.yaml
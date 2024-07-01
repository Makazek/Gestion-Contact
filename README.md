# Gestion-Contact

Cette application est un gestionnaire de contacts simple développé en React avec Vite. Elle permet aux utilisateurs d'ajouter, de modifier, de supprimer, de trier et de filtrer des contacts. Les contacts sont persistés dans le `localStorage` pour permettre de conserver les données même après le rechargement de la page.

## Fonctionnalités

- Ajouter un contact
- Modifier un contact
- Supprimer un contact
- Rechercher des contacts par nom
- Trier les contacts par nom ou date d'ajout
- Pagination pour les contacts

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/contact-manager.git

2-Accédez au répertoire du projet :
  cd contact-manager
  
3-Installez les dépendances : 
npm install

## Utilisation

Démarrez le serveur de développement :
npm run dev

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application en action

## Structure du Projet

contact-manager/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── ContactForm.css
│   │   ├── ContactItem.jsx
│   │   ├── ContactItem.css
│   │   ├── ContactList.jsx
│   │   ├── ContactList.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md


Ce fichier `README.md` fournit des instructions complètes sur l'installation et l'utilisation de votre application, ainsi que des détails sur la structure du projet et les fonctionnalités disponibles.


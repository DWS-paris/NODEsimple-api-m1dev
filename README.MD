# NodeJS simple API : M1dev ECV Digital Paris

Ce repo à pour but d'apprendre à mettre en place un serveur NodeJS distribuant une API. Ce repo est développé dans lee cadre d'une session de cour sur les principes des requêtes asynchrone.

## Préparation

Pour utiliser ce repo dans les meilleurs conditions vous devez au préalable avoir d'installé sur votre machine [NodeMon](https://www.npmjs.com/package/nodemon) et [JsonServer](https://www.npmjs.com/package/json-server) :

```bash
npm install -g nodemon
npm install -g json-server
```

Une fois le repo clôné vous deveeze également unstaller les dépendances du serveur en lancant la commande suivante dans le dossier `server` :

```bash
npm i
```

## Lancer le projet

Ce projet est constitué d'une base de données NoSql et d'un serveur NodeJS, c'est pourquoi vous deveez lancer les deux commandes suivante deepuis le dossieer `server` dans deux fenêetre différentes :

```bash
npm start
npm run launch-db
```
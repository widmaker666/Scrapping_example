# Scraper avec Puppeteer et Nodemailer

Ce script utilise Puppeteer pour extraire des données à partir d'une page web spécifique et Nodemailer pour envoyer une notification par e-mail lorsque certaines conditions sont remplies, telles que la baisse de prix d'un produit.

## Installation

1. Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/votre_utilisateur/votre_depot.git
```


2. Installez les dépendances nécessaires en exécutant la commande suivante dans le répertoire du projet :

```bash
npm install
```

## Configuration

1. Créer le fichier en `.env` et configurez les variables d'environnement suivantes :

   - `MAIL_ADDRESS`: Votre adresse e-mail Gmail depuis laquelle vous souhaitez envoyer les notifications.
   - `MAIL_PASS`: Le mot de passe de votre compte Gmail.

   et pour insta

  - `INSTA_MAIL`: Votre adresse e-mail Gmail depuis laquelle vous souhaitez envoyer les notifications.
  - `INSTA_MDP`: Le mot de passe de votre compte Gmail.

## Utilisation

1. Modifiez l'URL dans le fichier `scraper.js` pour correspondre à la page que vous souhaitez scraper :

```javascript
const url = "https://www.example.com/produit";
```

2. Modifiez les conditions dans la fonction `sendNotification` selon vos besoins. Par exemple, vous pouvez modifier la condition pour déclencher une notification lorsque le prix du produit est inférieur à un certain seuil.

3. Exécutez le script en exécutant la commande suivante :

```bash
node scraper.js
```

## Licence

Ce projet est sous licence [MIT](LICENSE).



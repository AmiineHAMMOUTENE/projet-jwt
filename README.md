# Projet JWT avec Symfony et React

Ce projet utilise Symfony comme backend pour gérer l'API, avec l'authentification via JWT (JSON Web Token). Le frontend est construit avec React pour l'interface utilisateur.

## 1. Schéma des données

### Tables principales

#### Table `users`
| Champ          | Type           | Description                          |
|----------------|----------------|--------------------------------------|
| `id`          | `int`          | Identifiant unique de l'utilisateur |
| `email`       | `string`       | Email unique de l'utilisateur       |
| `password`    | `string`       | Mot de passe hashé                  |
| `roles`       | `json`         | Rôles de l'utilisateur (ex: ["ROLE_USER", "ROLE_ADMIN"]) |

#### Table `modules`
| Champ          | Type           | Description                          |
|----------------|----------------|--------------------------------------|
| `id`          | `int`          | Identifiant unique du post          |
| `title`       | `string`       | Titre du post                       |
| `content`     | `text`         | Contenu du post                     |
| `created_at`  | `datetime`     | Date de création du post            |

### Relations
- No relations at the moment



## 2. Schéma de l'authentification avec JWT

### Processus d'authentification
1. **Inscription** :
   - L'utilisateur envoie son email et mot de passe à l'API.
   - Le mot de passe est hashé et stocké dans la base de données.

2. **Connexion** :
   - L'utilisateur envoie son email et mot de passe à l'API.
   - Si les informations sont correctes :
     - Un JWT est généré, signé avec une clé secrète.
     - Le JWT est retourné au client.
   - Sinon, une erreur est renvoyée.

3. **Accès aux routes protégées** :
   - Le client inclut le JWT dans les headers des requêtes (ex : `Authorization: Bearer <token>`).
   - L'API vérifie la validité du JWT :
     - Si le token est valide, l'utilisateur est autorisé.
     - Sinon, l'accès est refusé.


### Schéma d'authentification avec JWT
```plaintext
[Frontend] -- (email/password) --> [API - /login]
              <-- (JWT token) --
[Frontend] -- (Authorization: Bearer <token>) --> [API - Protected Routes]
              <-- (Data) --
```

## Technologies utilisées

### Backend
- Symfony 6
- LexikJWTAuthenticationBundle

### Frontend
- React
- tailwind (for CSS)
- shadcn (for ui component, atonic design)

## Installation

### Backend (Symfony)
1. Installer les dépendances :
   ```bash
   composer install
   ```
2. Configurer le fichier `.env` pour la base de données.
3. Créer la base de données et appliquer les migrations :
   ```bash
   php bin/console doctrine:database:create
   php bin/console doctrine:migrations:migrate
   ```
   ou biem 
   ```bash
   symfony console doctrine:database:create
   symfony console d:m:m
   ```
4. Générer la clé JWT (il faut avoir onpenSSL):
   ```bash
   php bin/console lexik:jwt:generate-keypair
   ```

### Frontend (React)
1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Configurer le fichier .env pour le url d'api (VITE_API_URL=http://127.0.0.1:8000/api).
2. Lancer le serveur de développement :
   ```bash
   npm run dev

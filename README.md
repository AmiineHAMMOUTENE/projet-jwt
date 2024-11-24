# Projet : Authentification JWT avec Symfony et React

Ce projet implémente une solution complète de gestion d’authentification et de protection des données via JSON Web Token (JWT). Symfony est utilisé pour le backend, tandis que React gère l’interface utilisateur avec une expérience moderne et intuitive.

---

## Présentation de l'application

L'application est une plateforme centralisée permettant aux utilisateurs de se connecter de manière sécurisée et d'accéder à des modules protégés. Grâce à l'authentification JWT, chaque interaction avec l'API est sécurisée, garantissant la confidentialité et l'intégrité des données échangées. 

---

## Stacks techniques

- **Backend** : Symfony 6, LexikJWTAuthenticationBundle, Doctrine ORM
- **Frontend** : React, Tailwind CSS, ShadCN (atomic design)
- **Base de données** : SQL

---

## Fonctionnalités principales (Features)

- **Gestion des utilisateurs** : inscription, connexion, et gestion des rôles.
- **Authentification sécurisée** : implémentation de JWT pour protéger les ressources de l’API.
- **Modules dynamiques** : récupération et affichage des contenus (modules) en temps réel.

---

## Sécurité (Vue générale)

1. **Authentification et autorisation** :
   - Utilisation de JWT pour sécuriser l'accès aux routes sensibles.
   - Vérification systématique des permissions utilisateur avant chaque action.

2. **Hashage des mots de passe** :
   - Mots de passe stockés sous forme hashée grâce à l'algorithme bcrypt.

3. **Communication sécurisée** :
   - Les échanges entre le client et le serveur se font exclusivement via HTTPS.

4. **Validation des entrées** :
   - Validation des données utilisateur au niveau du frontend et backend.

---

## Wireframe

Un wireframe détaillé a été conçu pour chaque écran principal :
1. **Page de connexion** : Interface simple permettant de saisir les identifiants.
. **affichage des données** : Interface simple permettant d'afficher les données 
---

## Intégration des wireframes

Les wireframes sont intégrés en utilisant les composants React et stylisés avec Tailwind CSS. Chaque composant correspond à une section clé de l'interface utilisateur.

---

## Récupération des modules

Les modules sont récupérés via des requêtes API sécurisées :
- Endpoint : `/api/modules`
- Requêtes protégées par un JWT valide.

## Modèle de données

### Entités principales

#### Table `users`
| Champ         | Type        | Description                                   |
|---------------|-------------|-----------------------------------------------|
| `id`          | `int`       | Identifiant unique de l’utilisateur           |
| `email`       | `string`    | Adresse email unique                         |
| `password`    | `string`    | Mot de passe (hashé pour des raisons de sécurité) |
| `roles`       | `json`      | Liste des rôles attribués (ex. : `["ROLE_USER", "ROLE_ADMIN"]`) |

#### Table `modules`
| Champ         | Type        | Description                                   |
|---------------|-------------|-----------------------------------------------|
| `id`          | `int`       | Identifiant unique du module                 |
| `title`       | `string`    | Titre du module                              |
| `content`     | `text`      | Contenu détaillé du module                   |
| `created_at`  | `datetime`  | Date et heure de création                    |


---

##. Authentification JWT : Fonctionnement

### Processus global

1. **Inscription** :
   - L'utilisateur soumet son email et son mot de passe à l'API.
   - Le mot de passe est automatiquement hashé avant d’être sauvegardé dans la base de données.

2. **Connexion** :
   - L'utilisateur transmet ses identifiants à l'API.
   - Si les informations sont correctes :
     - Un JWT, signé avec une clé secrète, est généré.
     - Ce token est renvoyé au client.
   - En cas d’erreur d’identification, une réponse appropriée est retournée.

3. **Accès aux ressources protégées** :
   - Le client inclut le JWT dans l'en-tête de chaque requête protégée (ex. : `Authorization: Bearer <token>`).
   - L'API vérifie la validité et l’intégrité du JWT :
     - Si le token est valide, l'accès est autorisé.
     - En cas d’invalidité, une réponse d’erreur est renvoyée.

### Diagramme du processus d'authentification
```plaintext
[Frontend] -- (email/password) --> [API - /login]
              <-- (JWT token) --
[Frontend] -- (Authorization: Bearer <token>) --> [API - Protected Routes]
              <-- (Protected Data) --


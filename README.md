# Projet : Authentification JWT avec Symfony et React

Ce projet implémente une solution complète de gestion d’authentification et de protection des données via JSON Web Token (JWT). Symfony est utilisé pour le backend, tandis que React gère l’interface utilisateur avec une expérience moderne et intuitive.

---

## 1. Modèle de données

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

### Relations
- **Aucune relation définie pour le moment.**

---

## 2. Authentification JWT : Fonctionnement

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


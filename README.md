# HelloAnto 💳

Tableau de bord personnel pour suivre ses transactions bancaires.
**Un seul fichier `index.html` — aucune installation, aucun serveur requis.**

---

## Lancement

Double-cliquer sur `index.html` dans ton explorateur de fichiers. C'est tout.

```
index.html  →  (login)  →  tableau de bord
```

---

## Comptes

| E-mail | Mot de passe |
|--------|-------------|
| `antoinengn45@gmail.com` | `antoine21` |
| `thingochan45140@gmail.com` | `han86` |

> ⚠️ Identifiants en clair dans le code — usage personnel uniquement.

---

## Fonctionnalités

- 🔐 Connexion / déconnexion (session en mémoire)
- 📊 4 cartes de synthèse : solde, débits, crédits, nombre d'opérations
- ➕ Ajout de transaction via le bouton **+ Ajouter** (modal)
- 🗑️ Suppression d'une ligne au clic sur la poubelle
- 💾 Persistance dans le `localStorage` — les données survivent aux rechargements
- ⌨️ Raccourcis clavier : `Entrée` pour valider, `Échap` pour fermer la modal

---

## Ajouter un compte

Dans `index.html`, repère ce tableau et ajoute une ligne :

```js
const COMPTES = [
  { email: 'antoinengn45@gmail.com',    pass: 'antoine21' },
  { email: 'thingochan45140@gmail.com', pass: 'han86'     },
  // { email: 'nouveau@email.com',      pass: 'monmdp'    },
];
```

---

## Structure

```
hellanto/
├── index.html   ← login + dashboard (tout-en-un)
└── README.md
```

Pas de `style.css`, `script.js`, `data.json` séparés — tout est dans `index.html`.

---

## Technologies

- HTML5 / CSS3 / JavaScript vanilla — zéro dépendance
- Polices [Syne + IBM Plex Mono + DM Serif Display](https://fonts.google.com/) via Google Fonts

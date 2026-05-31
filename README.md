# HelloAnto 💳

Tableau de bord personnel pour suivre ses transactions bancaires — léger, sans dépendance, 100 % HTML/CSS/JS.

---

## Aperçu

| Page | Fichier | Rôle |
|------|---------|------|
| Connexion | `login.html` | Authentification locale |
| Tableau de bord | `dashboard.html` | Visualisation des transactions |

---

## Fonctionnalités

- 🔐 **Connexion sécurisée** — vérification des identifiants côté client
- 📊 **Cartes de synthèse** — solde final, total débits, total crédits, nombre d'opérations
- 📋 **Tableau de transactions** — date, description, type (Débité / Crédité), montant
- 🎨 **Design moderne** — palette crème/encre/vert sauge, animations fluides, typographie DM Serif + DM Sans
- 📱 **Responsive** — s'adapte aux petits écrans

---

## Utilisation

### Lancement rapide

Ouvre simplement `login.html` dans un navigateur — aucun serveur ni installation requise.

```
login.html  →  (connexion)  →  dashboard.html
```

### Identifiants par défaut

| Champ | Valeur |
|-------|--------|
| Email | `antoinengn45@gmail.com` |
| Mot de passe | `antoine21` |

> ⚠️ Ces identifiants sont en clair dans le code. Ne pas utiliser en production.

---

## Modifier les transactions

Les données sont directement dans `dashboard.html`, dans le tableau JavaScript `transactions` :

```js
const transactions = [
  { "date": "2026-04-16", "description": "Victorine - Orléans", "type": "Débité",  "montant": 11.80 },
  { "date": "2026-05-09", "description": "Retrait en Banque",   "type": "Crédité", "montant": 51.05 },
  // Ajoute tes lignes ici...
];
```

Chaque transaction suit ce format :

| Clé | Type | Valeur possible |
|-----|------|-----------------|
| `date` | `string` | `"AAAA-MM-JJ"` |
| `description` | `string` | Texte libre |
| `type` | `string` | `"Débité"` ou `"Crédité"` |
| `montant` | `number` | Nombre positif (ex. `12.50`) |

---

## Structure du projet

```
hellanto/
├── login.html       # Page de connexion
├── dashboard.html   # Tableau de bord (données incluses)
└── README.md
```

> Pas de `style.css`, `script.js` ni `data.json` séparés — tout est intégré dans les fichiers HTML.

---

## Technologies

- HTML5 / CSS3 / JavaScript vanilla
- Police [DM Serif Display + DM Sans](https://fonts.google.com/) via Google Fonts

---

## Évolutions possibles

- [ ] Charger les transactions depuis un fichier `data.json` externe
- [ ] Ajouter un filtre par mois ou par type
- [ ] Exporter le tableau en CSV
- [ ] Authentification côté serveur (Node.js / PHP)

const express = require('express');
const ejs = require('ejs');
 
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Config EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // Exemple de données statiques (à remplacer par une requête PostgreSQL)
  const stats = {
    membres: 120,
    parcelles: 85,
    cotisations: 4500000,
    productions: [120, 150, 180, 220, 300, 250, 400]
  };
  res.render("dashboard", { title: "Tableau de bord", stats });
});
app.get("/membre", (req, res) => {
  const membres = [
    { id: 1, nom: 'Koffi', prenom: 'Jean', telephone: 120 },
    { id: 2, nom: 'Yao', prenom: 'Léon', telephone: 150 },
    { id: 3, nom: 'Koné', prenom: 'Isaac', telephone: 180 },
    { id: 4, nom: 'Trazié', prenom: 'Georges', telephone: 220 },
    { id: 1, nom: 'Koffi', prenom: 'Jean', telephone: 120 },
    { id: 2, nom: 'Yao', prenom: 'Léon', telephone: 150 },
    { id: 3, nom: 'Koné', prenom: 'Isaac', telephone: 180 },
    { id: 4, nom: 'Trazié', prenom: 'Georges', telephone: 220 },
    { id: 5, nom: 'Kramo', prenom: 'Youssouf', telephone: 300 },
    { id: 5, nom: 'Kramo', prenom: 'Youssouf', telephone: 300 },
    { id: 1, nom: 'Koffi', prenom: 'Jean', telephone: 120 },
    { id: 2, nom: 'Yao', prenom: 'Léon', telephone: 150 },
    { id: 3, nom: 'Koné', prenom: 'Isaac', telephone: 180 },
    { id: 4, nom: 'Trazié', prenom: 'Georges', telephone: 220 },
    { id: 1, nom: 'Koffi', prenom: 'Jean', telephone: 120 },
    { id: 2, nom: 'Yao', prenom: 'Léon', telephone: 150 },
    { id: 3, nom: 'Koné', prenom: 'Isaac', telephone: 180 },
    { id: 4, nom: 'Trazié', prenom: 'Georges', telephone: 220 },
    { id: 5, nom: 'Kramo', prenom: 'Youssouf', telephone: 300 }
  ];
  res.render("membre", { title: "Gestion des membres", membre: membres });
});


// Penser à mettre en avant le stock

app.listen(3001, () => {
  console.log("🚀 Serveur démarré sur http://localhost:3001");
});

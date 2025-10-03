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

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Accueil Coopérative" });
});

app.listen(3001, () => {
  console.log("🚀 Serveur démarré sur http://localhost:3001");
});

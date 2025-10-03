function initDashboard(stats) {
  // Graphique ligne production
  new Chart(document.getElementById("prodChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil"],
      datasets: [{
        label: "Production (tonnes)",
        data: stats.productions,
        borderColor: "green",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive: true }
  });

  // Graphique doughnut membres
  new Chart(document.getElementById("membresChart"), {
    type: "doughnut",
    data: {
      labels: ["Actifs", "Inactifs"],
      datasets: [{
        data: [stats.membres, 20],
        backgroundColor: ["#16a34a", "#d1d5db"]
      }]
    }
  });
}

import * as d3 from "d3";

function createTable(data) {
  // Sélectionner l'élément où le tableau sera inséré
  const tableContainer = d3.select("#table-container");

  // Créer un tableau HTML
  const table = tableContainer.append("table").attr("class", "data-table");

  // Ajouter un en-tête de tableau
  const thead = table.append("thead");
  const headerRow = thead.append("tr");
  headerRow.append("th").text("Super Genre");
  headerRow.append("th").text("Genre");
  headerRow.append("th").text("Description");
  headerRow.append("th").text("Sous-genres");

  // Ajouter le corps du tableau
  const tbody = table.append("tbody");

  // Insérer les données dans le tableau
  data.super_genres.forEach(superGenre => {
      superGenre.genres.forEach(genre => {
          const row = tbody.append("tr");
          row.append("td").text(superGenre.name);
          row.append("td").text(genre.name);
          row.append("td").text(genre.description);
          row.append("td").text(genre.subgenres.join(", "));
      });
  });
}

// Charger les données JSON et appeler la fonction createTable
d3.json("data/beattunes_fra.json").then(data => {
  createTable(data);
}).catch(error => {
  console.error("Erreur lors du chargement des données:", error);
});


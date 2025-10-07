let myImgs = [
    "beach-2465444_1280.jpg",
    "chrysanthemum-991625_1280.jpg",
    "clouds-4811772_1280.jpg",
    "flower-7540214_1280.jpg",
    "flower-810184_1280.jpg",
    "landscape-4930982_1280.jpg",
    "rock-3693179_1280.jpg",
    "rock-3693182_1280.jpg",
    "spring-1281153_1280.jpg",
    "spring-1281183_1280.jpg",
    "stone-wall-road-2801183_1280.jpg",
    "tree-3358468_1280.jpg"
  ];

// mögliche Titel
let randomTitles = [
  "Verträumte Oase",
  "Sonnenstrahl im Korb",
  "Frühlingstraum",
  "Magie des Augenblicks",
  "Unendlicher Horizont",
  "Tanz der Wellen",
  "Blütenpoesie",
  "Goldene Stunde",
  "Pfad ins Unbekannte",
  "Stille Harmonie",
  "Leuchtende Horizonte",
  "Zauber des Lichts"
];

// mögliche Beschreibungen
let randomDescriptions = [
  "Ein ruhiger Moment voller Frieden.",
  "Farben, die das Herz erhellen.",
  "Ein Hauch von Natur im Alltag.",
  "Zarte Schönheit, die vergänglich ist.",
  "Ein Ort, an dem man die Zeit vergisst.",
  "Wellen, die Geschichten erzählen.",
  "Ein Bild der reinen Gelassenheit.",
  "Sonnenstrahlen, die die Seele wärmen.",
  "Ein Spaziergang in die Ferne.",
  "Blüten, die Hoffnung schenken.",
  "Ein stilles Versprechen der Natur.",
  "Ein Augenblick voller Magie."
];

// Hilfsfunktion: zufälligen Eintrag auswählen
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
} 

// Hilfsfunktion: erzeugt HTML für alle Bilder
function getNotesHtml(images) {
  return images.map(img => {
  let title = getRandom(randomTitles);
  let desc = getRandom(randomDescriptions);
  return `
    <div class="gallery-item">
      <img src="imgs/img/${img}" alt="${img}">
      <div class="caption">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
    </div>
  `;
}).join('');
}

// Render-Funktion: fügt HTML in die Seite ein
function render() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = getNotesHtml(myImgs);
}

// Seite rendern
document.addEventListener("DOMContentLoaded", () => {
  render();
});

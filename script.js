const GALLERY_ITEMS = [
  {
    image: "beach-2465444_1280.jpg",
    title: "Verträumte Oase",
    description: "Ein ruhiger Moment voller Frieden.",
    alt: "Strand mit ruhigem Meer und Wolken am Himmel"
  },
  {
    image: "chrysanthemum-991625_1280.jpg",
    title: "Sonnenstrahl im Korb",
    description: "Farben, die das Herz erhellen.",
    alt: "Blumen in einem Korb"
  },
  {
    image: "clouds-4811772_1280.jpg",
    title: "Unendlicher Horizont",
    description: "Ein Ort, an dem man die Zeit vergisst.",
    alt: "Wolken am Himmel"
  },
  {
    image: "flower-7540214_1280.jpg",
    title: "Magie des Augenblicks",
    description: "Zarte Schönheit, die vergänglich ist.",
    alt: "Nahaufnahme einer Blume"
  },
  {
    image: "flower-810184_1280.jpg",
    title: "Frühlingstraum",
    description: "Ein Hauch von Natur im Alltag.",
    alt: "Rosa Blüten"
  },
  {
    image: "landscape-4930982_1280.jpg",
    title: "Tanz der Blumen",
    description: "Blumen, die Geschichten erzählen.",
    alt: "Blumenlandschaft"
  },
  {
    image: "rock-3693179_1280.jpg",
    title: "Pfad ins Unbekannte",
    description: "Ein Spaziergang in die Ferne.",
    alt: "Steiniger Weg"
  },
  {
    image: "rock-3693182_1280.jpg",
    title: "Goldene Stunde",
    description: "Sonnenstrahlen, die die Seele wärmen.",
    alt: "Steine im Sonnenlicht"
  },
  {
    image: "spring-1281153_1280.jpg",
    title: "Blütenpoesie",
    description: "Ein stilles Versprechen der Natur.",
    alt: "Weiße Blüten"
  },
  {
    image: "spring-1281183_1280.jpg",
    title: "Leuchtende Horizonte",
    description: "Blüten, die Hoffnung schenken.",
    alt: "Sich öffnende Blütenknospe"
  },
  {
    image: "stone-wall-road-2801183_1280.jpg",
    title: "Stille Harmonie",
    description: "Ein Bild der reinen Gelassenheit.",
    alt: "Steinmauer am Weg"
  },
  {
    image: "tree-3358468_1280.jpg",
    title: "Zauber des Lichts",
    description: "Ein Augenblick voller Magie.",
    alt: "Baum mit Licht am Horizont"
  }
];

let currentImageIndex = 0;

// ===== FUNKTIONEN =====

// Initialisiert die Galerie wenn die Seite geladen wird
function init() {
  renderGallery();
  setupEventListeners();
}

// Funktion erstellen die die später Bilder render soll
function renderGallery(){
    const GALLERY_REF = document.getElementById("gallery-container");

    for(let i=0; i<GALLERY_ITEMS.length; i++ ){ 
        GALLERY_REF.innerHTML += `
        <div class="gallery-item" onclick="openDialog(${i})">
            <img src="./imgs/img/${GALLERY_ITEMS[i].image}"
                alt="${GALLERY_ITEMS[i].alt}"
                loading="lazy">
            <div style="display:none;" class class="caption">
                <h3>${GALLERY_ITEMS[i].title}</h3>
                <p>${GALLERY_ITEMS[i].description}</p> 
            </div>  
        </div>
        `;
    }
}

// Öffnet den Dialog mit dem angeklickten Bild
function openDialog(index) {
  currentImageIndex = index;
  const item = GALLERY_ITEMS[index];
  const dialog = document.getElementById('image-dialog');
  
  document.getElementById('dialog-image').src = `./imgs/img/${item.image}`;
  document.getElementById('dialog-image').alt = item.alt;
  document.getElementById('dialog-title').textContent = item.title;
  document.getElementById('dialog-description').textContent = item.description;
  
  dialog.showModal();
  updateNavigationButtons();
}

// Schließt den Dialog
function closeDialog() {
  const dialog = document.getElementById('image-dialog');
  dialog.close();
}

// Zeigt das nächste Bild an
function nextImage() {
  if (currentImageIndex < GALLERY_ITEMS.length - 1) {
    currentImageIndex++;
    updateDialogContent();
  }
}

// Zeigt das vorherige Bild an
function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateDialogContent();
  }
}

// Aktualisiert den Dialog-Inhalt ohne den Dialog zu schließen
function updateDialogContent() {
  const item = GALLERY_ITEMS[currentImageIndex];
  
  document.getElementById('dialog-image').src = `./imgs/img/${item.image}`;
  document.getElementById('dialog-image').alt = item.alt;
  document.getElementById('dialog-title').textContent = item.title;
  document.getElementById('dialog-description').textContent = item.description;
  
  updateNavigationButtons();
}

// Aktualisiert die Navigations-Buttons
function updateNavigationButtons() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === GALLERY_ITEMS.length - 1;
}

// Setzt Event-Listener auf
function setupEventListeners() {
  const dialog = document.getElementById('image-dialog');
  // Klick außerhalb des Dialogs schließt ihn (wird automatisch durch dialog-Element gehandelt)
  
  // Tastatur-Navigation
  document.addEventListener('keydown', function(event) {
    // const dialog = document.getElementById('image-dialog');
    if (dialog.open) {
      // if (event.key === 'Escape') {
      //   // Wird automatisch durch dialog-Element gehandelt
      // }
      if (event.key === 'ArrowLeft') {
        prevImage();
      }
      if (event.key === 'ArrowRight') {
        nextImage();
      }
    }
  });

  // Einfache Lösung - Click auf den Dialog (nicht den Content)
  dialog.addEventListener('click', function(event) {
    const dialog = document.getElementById('image-dialog');
    if (event.target === dialog) {
      dialog.close();
      announceToScreenReader('Dialog geschlossen');
    }
  });
}



// // Initialisierung wenn die Seite geladen ist
// document.addEventListener('DOMContentLoaded', init);
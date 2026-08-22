/* ============================================================
   Lógica del sitio: idioma actual, render de series/piezas,
   y el modal que se abre al hacer click en una pieza.
   ============================================================ */

let currentLang = "fr";

function phFallback(imgEl) {
  imgEl.style.display = "none";
  const ph = imgEl.nextElementSibling;
  if (ph) ph.style.display = "flex";
}

function applyI18n() {
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = currentLang;

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  renderProcessList();
  renderSeries();
  renderCommissionPhotos();
  renderMockupPhotos();

  const subjects = {
    fr: "Projet de commission",
    en: "Commission project",
    es: "Proyecto de comisión"
  };
  const ctaLink = document.getElementById("cta-commission-link");
  if (ctaLink) {
    ctaLink.href = "mailto:nomichiquitastudio@gmail.com?subject=" + encodeURIComponent(subjects[currentLang]);
  }
}

function renderMockupPhotos() {
  const dict = I18N[currentLang];
  const box = document.getElementById("mockups-strip");
  if (!box) return;
  box.innerHTML = "";
  MOCKUP_PHOTOS.forEach(function (src) {
    const tile = document.createElement("div");
    tile.className = "mockup-tile";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Simulation d'installation, pièce de Patricia Moreno";
    const ph = document.createElement("div");
    ph.className = "ph-text";
    ph.style.display = "none";
    ph.textContent = dict.photo_soon;
    img.onerror = function () { phFallback(img); };
    tile.addEventListener("click", function () { openLightbox(src); });
    tile.appendChild(img);
    tile.appendChild(ph);
    box.appendChild(tile);
  });
}

function renderCommissionPhotos() {
  const dict = I18N[currentLang];
  const box = document.getElementById("commission-photos");
  box.innerHTML = "";
  COMMISSION_PHOTOS.forEach(function (src) {
    const tile = document.createElement("div");
    tile.className = "commission-photo-tile";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Commission Patricia Moreno";
    const ph = document.createElement("div");
    ph.className = "ph-text";
    ph.style.display = "none";
    ph.textContent = dict.photo_soon;
    img.onerror = function () { phFallback(img); };
    tile.addEventListener("click", function () { openLightbox(src); });
    tile.appendChild(img);
    tile.appendChild(ph);
    box.appendChild(tile);
  });
}

function renderProcessList() {
  const dict = I18N[currentLang];
  const list = document.getElementById("process-list");
  list.innerHTML = "";
  dict.process.forEach(function (step) {
    const li = document.createElement("li");
    const h5 = document.createElement("h5");
    h5.textContent = step[0];
    const p = document.createElement("p");
    p.textContent = step[1];
    li.appendChild(h5);
    li.appendChild(p);
    list.appendChild(li);
  });
}

function renderSeries() {
  const dict = I18N[currentLang];
  const container = document.getElementById("series-container");
  container.innerHTML = "";

  const nav = document.getElementById("series-nav");
  if (nav) nav.innerHTML = "";

  SERIES_ORDER.forEach(function (seriesKey) {
    const pieces = PIECES.filter(function (p) { return p.series === seriesKey; });
    if (pieces.length === 0) return;

    if (nav) {
      const link = document.createElement("a");
      link.href = "#series-" + seriesKey;
      link.textContent = dict.series_names[seriesKey];
      nav.appendChild(link);
    }

    const block = document.createElement("div");
    block.className = "series-block";
    block.id = "series-" + seriesKey;

    const h3 = document.createElement("h3");
    h3.textContent = dict.series_names[seriesKey];
    block.appendChild(h3);

    const note = document.createElement("p");
    note.className = "series-note";
    note.textContent = dict.series_notes[seriesKey];
    block.appendChild(note);

    const grid = document.createElement("div");
    grid.className = "piece-grid";

    pieces.forEach(function (piece) {
      const card = document.createElement("button");
      card.className = "piece-card";
      card.type = "button";
      card.addEventListener("click", function () { openModal(piece); });

      const media = document.createElement("div");
      media.className = "piece-media";
      const img = document.createElement("img");
      img.src = piece.images[0] || "";
      img.alt = piece.title;
      img.onerror = function () { phFallback(img); };
      const ph = document.createElement("div");
      ph.className = "ph-text";
      ph.style.display = "none";
      ph.textContent = dict.photo_soon;
      media.appendChild(img);
      media.appendChild(ph);

      const info = document.createElement("div");
      info.className = "piece-info";
      const h4 = document.createElement("h4");
      h4.textContent = piece.title;
      const meta = document.createElement("p");
      meta.className = "meta";
      meta.textContent = piece.dimensions;
      info.appendChild(h4);
      info.appendChild(meta);

      card.appendChild(media);
      card.appendChild(info);
      grid.appendChild(card);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

function openModal(piece) {
  const dict = I18N[currentLang];
  document.getElementById("modal-title").textContent = piece.title;
  document.getElementById("modal-meta").textContent = piece.dimensions;
  document.getElementById("modal-story").textContent = piece.story[currentLang] || piece.story.fr;
  document.getElementById("modal-materials").textContent = piece.materials;
  document.getElementById("modal-dimensions").textContent = piece.dimensions;

  const mainImg = document.getElementById("modal-main-img");
  mainImg.src = piece.images[0] || "";
  mainImg.onerror = function () { mainImg.style.opacity = "0.15"; };
  mainImg.onload = function () { mainImg.style.opacity = "1"; };

  const thumbs = document.getElementById("modal-thumbs");
  thumbs.innerHTML = "";
  if (piece.images.length > 1) {
    piece.images.forEach(function (src, idx) {
      const t = document.createElement("img");
      t.src = src;
      t.className = idx === 0 ? "active" : "";
      t.onerror = function () { t.style.display = "none"; };
      t.addEventListener("click", function () {
        mainImg.src = src;
        thumbs.querySelectorAll("img").forEach(function (x) { x.classList.remove("active"); });
        t.classList.add("active");
      });
      thumbs.appendChild(t);
    });
  }

  document.getElementById("modal-overlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

function openLightbox(src) {
  const img = document.getElementById("lightbox-img");
  img.src = src;
  document.getElementById("lightbox-overlay").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox-overlay").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", function () {
  applyI18n();

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentLang = btn.getAttribute("data-lang");
      applyI18n();
    });
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", function (e) {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-overlay").addEventListener("click", function (e) {
    if (e.target.id === "lightbox-overlay") closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); closeLightbox(); }
  });
});

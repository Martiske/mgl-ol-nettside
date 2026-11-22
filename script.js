const manualMatches = {
    "Pils Under Press": "Pils Under Press blue um ba.jpg",
    "Sur Flaten": "Flaten Surøl.jpg",
    "SvinPils": "SvinPils2.jpg",
    "Witty Peach": "Witty Peach V. 3.1.jpg",
    "TCJB (Tiger City Jungle Brew)": "TCJBSvart.jpg",
    "Ginger Bells": "Gingerbells.jpg",
    "AleBuzz Humlesnurr": "HumlesnurrEtikette.jpg",
    "IPA Nema Problema II": "IPA Nema Problema2a.jpg",
    "La Religieuse Martha": "LaReligieuseMartha.jpg",
    "Le Moine Martin": "LeMoineMartin.jpg",
    "Great Auk Hop": "Great Auk label A GreenYellowL.jpg",
    "Einfer": "EinferEngelsk.jpg",
    "Easy Livin'": "Easy Livin.jpg",
    "Easy Livin’": "Easy Livin.jpg",
    "APA (Definite Singular)": "APA.jpg",
    "Easy Livin' 2.0": "Easy Livin 2.0 2.jpg",
    "Easy Livin’ 2.0": "Easy Livin 2.0 2.jpg",
    "Tadvin Saison": "Tadvin.jpg"
};

const beerPhotos = {
    "Skeisen Weiss Wisswass Weizen-Wasser": [
        { file: "Skeisen Weiss Wisswass Weizen-Wasser glass.jpeg", caption: "Glass" }
    ],
    "TeaPA": [
        { file: "TeaPA on keg.jpeg", caption: "På fat" },
        { file: "TeaPA cracker.jpeg", caption: "Servering" }
    ],
    "Great Auk Hop": [
        { file: "Great Auk Hop glass.jpeg", caption: "Glass" }
    ],
    "Le Moine Martin": [
        { file: "Le Moine Martin glass.jpeg", caption: "Glass" },
        { file: "Le Moine Martin Bottle glass.jpeg", caption: "Flaske og glass" },
        { file: "Le Moine Martin La Religieuse Martha 2014.jpeg", caption: "Sammen med La Religieuse Martha, 2014" }
    ],
    "La Religieuse Martha": [
        { file: "La Religieuse Martha glass.jpeg", caption: "Glass" },
        { file: "La religieuse Martha glass bottle.jpeg", caption: "Flaske og glass" },
        { file: "Le Moine Martin La Religieuse Martha 2014.jpeg", caption: "Sammen med Le Moine Martin, 2014" }
    ],
    "Easy Livin’": [
        { file: "Easy livin' glass.jpeg", caption: "Glass" },
        { file: "Easy livin' glass keg label.jpeg", caption: "Glass og fatetikett" }
    ],
    "Gå Sjøl": [
        { file: "Gå sjøl gårdsøl glass.jpeg", caption: "Glass" },
        { file: "Gå sjøl gårdsøl glass label.jpeg", caption: "Glass og etikett" }
    ],
    "Einfer": [
        { file: "Einfer bottles.jpeg", caption: "Flasker" }
    ],
    "Goð Jøl": [
        { file: "God jöl glass bottle.jpeg", caption: "Glass og flaske" }
    ],
    "Quark-Gluon Plasma": [
        { file: "Quark-gluon plasma bottle.jpeg", caption: "Flaske" },
        { file: "Quark-gluon plasma glass label.jpeg", caption: "Glass og etikett" }
    ],
    "A Pilsnarr": [
        { file: "A pilsnarr glass label.jpeg", caption: "Glass og etikett" }
    ],
    "APA (Definite Singular)": [
        { file: "APA (definite singular) glass label.jpeg", caption: "Glass og etikett" }
    ],
    "SaisÅsta": [
        { file: "SaisÅsta glass label.jpeg", caption: "Glass og etikett" }
    ],
    "Biscuit de Garde": [
        { file: "Biscuit de garde glass.jpeg", caption: "Glass" },
        { file: "Biscuit de garde glass bottle.jpeg", caption: "Glass og flaske" }
    ],
    "Flaten Sæterøl": [
        { file: "Flaten sæterøl glass label.jpeg", caption: "Glass og etikett" }
    ],
    "All I Want for Christmas is Brew": [
        { file: "All I want for christmas is brew glass bottle.jpeg", caption: "Glass og flaske" }
    ],
    "SvinPils": [
        { file: "Svinpils glass label.jpeg", caption: "Glass og etikett" }
    ],
    "Funky Flaten": [
        { file: "Funky flaten glass label.jpeg", caption: "Glass og etikett" }
    ],
    "Witty Peach": [
        { file: "Witty peach glass.jpeg", caption: "Glass" },
        { file: "Witty peach long glass.jpeg", caption: "Høyt glass" },
        { file: "Witty peach tap.jpeg", caption: "På tap" }
    ],
    "The Kid with Red Ale": [
        { file: "The kid with red ale glass lable.jpeg", caption: "Glass og etikett" }
    ],
    "AleBuzz Humlesnurr": [
        { file: "AleBuzz Humlesnurr glass.jpeg", caption: "Glass" }
    ],
    "Bösebrücke Berliner Weisse": [
        { file: "Bösebrücke glass label.jpeg", caption: "Glass og etikett" },
        { file: "Bösebrücke Pet.jpeg", caption: "Flaske" }
    ],
    "Mangohumle": [
        { file: "Mangohumle glass label.jpeg", caption: "Glass og etikett" }
    ],
    "Easy Livin’ 2.0": [
        { file: "Easy livin' 2.0 glass.jpeg", caption: "Glass" }
    ],
    "Porter Salut Britain": [
        { file: "Porter salut glass.jpeg", caption: "Glass" },
        { file: "Porter salut after eight.jpeg", caption: "Servering" }
    ],
    "BringeBeer": [
        { file: "Bringe Beer glass.jpeg", caption: "Glass" }
    ],
    "Sur Flaten": [
        { file: "Sur flaten, Pils under press, Pure pale ale bottles.jpeg", caption: "Sammen med Pils Under Press og Pure Pale Ale" }
    ],
    "Pils Under Press": [
        { file: "Sur flaten, Pils under press, Pure pale ale bottles.jpeg", caption: "Sammen med Sur Flaten og Pure Pale Ale" }
    ],
    "Pure Pale Ale": [
        { file: "Pure pale ale glass label.jpeg", caption: "Glass og etikett" },
        { file: "Sur flaten, Pils under press, Pure pale ale bottles.jpeg", caption: "Sammen med Sur Flaten og Pils Under Press" }
    ],
    "Lager '76": [
        { file: "Lager '76 glass.jpeg", caption: "Glass" },
        { file: "Lager '76 glass label.jpeg", caption: "Glass og etikett" }
    ],
    "Pils Panther": [
        { file: "Wit is hip!, Pink panther festival tap.jpeg", caption: "Festivalservering sammen med Wit is Hip!" }
    ],
    "Wit is Hip!": [
        { file: "Wit is hip!, Pink panther festival tap.jpeg", caption: "Festivalservering sammen med Pils Panther" }
    ],
    "Märzen Good & Lovely": [
        { file: "Martha's good & lovely märzen glass.jpeg", caption: "Glass" },
        { file: "Martha's good & lovely märzen glass label.jpeg", caption: "Glass og etikett" }
    ]
};

const fallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
  <rect width="300" height="400" fill="#f5f1e8"/>
  <rect x="18" y="18" width="264" height="364" rx="18" fill="#fffdf8" stroke="#d6c7b4"/>
  <text x="150" y="184" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" fill="#7a6f62">MGL</text>
  <text x="150" y="214" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="14" fill="#9a8f84">Etikett mangler</text>
</svg>
`)}`;

const grid = document.getElementById("beerGrid");
const onTapGrid = document.getElementById("onTapGrid");
const styleFilter = document.getElementById("styleFilter");
const sortControls = document.getElementById("sortControls");
const searchInput = document.getElementById("searchInput");
const filterContainer = document.getElementById("activeFilters");
const modal = document.getElementById("beerModal");
const modalContent = document.querySelector(".modal-content");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const beerPhotoGallery = document.getElementById("beerPhotoGallery");
const modalDesc = document.getElementById("modalDesc");
const modalDetails = document.getElementById("modalDetails");
const closeModalBtn = document.getElementById("closeModalBtn");

let activeStyle = "";
let activeYear = null;
let activeSort = "year-desc";

const styles = [...new Set(beers.map((beer) => beer.style).filter(Boolean))].sort();
const sortOptions = [
    { value: "year-desc", label: "Nyeste først" },
    { value: "year-asc", label: "Eldste først" },
    { value: "abv-desc", label: "Høy ABV" },
    { value: "abv-asc", label: "Lav ABV" }
];

function findImage(beerName) {
    if (manualMatches[beerName]) {
        return `labels/${manualMatches[beerName]}`;
    }

    return `labels/${beerName}.jpg`;
}

function photoPath(fileName) {
    return `Ølbilder til øl/${fileName}`;
}

function renderBeerPhotos(beer) {
    const photos = beerPhotos[beer.name] || [];
    beerPhotoGallery.innerHTML = "";
    beerPhotoGallery.hidden = photos.length === 0;

    photos.forEach((photo) => {
        const figure = document.createElement("figure");
        figure.className = "beer-photo";

        const image = document.createElement("img");
        image.src = photoPath(photo.file);
        image.alt = photo.caption ? `${beer.name}: ${photo.caption}` : beer.name;
        image.loading = "lazy";

        figure.appendChild(image);

        if (photo.caption) {
            const caption = document.createElement("figcaption");
            caption.textContent = photo.caption;
            figure.appendChild(caption);
        }

        beerPhotoGallery.appendChild(figure);
    });
}

function ebcToColor(ebc) {
    if (!ebc) {
        return "#ccc";
    }

    const srm = ebc / 1.97;
    const r = Math.round(255 * Math.exp(-0.1 * srm));
    const g = Math.round(245 * Math.exp(-0.15 * srm));
    const b = Math.round(220 * Math.exp(-0.3 * srm));

    return `rgb(${r}, ${g}, ${b})`;
}

function applyBeerTint(card, beer) {
    if (!beer.ebc) {
        return;
    }

    const color = ebcToColor(beer.ebc);
    card.style.background = `linear-gradient(rgba(255, 252, 247, 0.9), rgba(255, 252, 247, 0.92)), ${color}`;
}

function createBeerCard(beer, compact = false) {
    const img = findImage(beer.name);
    const card = document.createElement("article");
    card.className = "beer-card";
    applyBeerTint(card, beer);

    card.innerHTML = `
        <img src="${img}" alt="${beer.name}" onerror="this.src='${fallbackImage}'">
        <h3>${beer.name}</h3>
        <p class="${compact ? "beer-card-style" : "beer-style"}">${beer.style || ""}</p>
        <p class="${compact ? "beer-card-abv" : "beer-abv"}">${beer.abv || ""}</p>
    `;

    card.addEventListener("click", () => openModal(beer, img));
    return card;
}

function renderBeers(list) {
    grid.innerHTML = "";
    const shownYears = new Set();

    list.forEach((beer) => {
        if (!shownYears.has(beer.year)) {
            shownYears.add(beer.year);
            const yearHeading = document.createElement("h2");
            yearHeading.textContent = beer.year;
            grid.appendChild(yearHeading);
        }

        grid.appendChild(createBeerCard(beer));
    });
}

function renderOnTap() {
    onTapGrid.innerHTML = "";

    beers
        .filter((beer) => beer.onTap)
        .forEach((beer) => {
            onTapGrid.appendChild(createBeerCard(beer, true));
        });
}

function setActiveStyleButton(value) {
    document.querySelectorAll(".style-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.style === value);
    });
}

function setActiveSortButton(value) {
    document.querySelectorAll(".sort-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.sort === value);
    });
}

function renderStyleButtons() {
    const allButton = document.createElement("button");
    allButton.type = "button";
    allButton.className = "style-btn active";
    allButton.dataset.style = "";
    allButton.textContent = "Alle";
    allButton.addEventListener("click", () => {
        activeStyle = "";
        activeYear = null;
        setActiveStyleButton("");
        updateView();
    });
    styleFilter.appendChild(allButton);

    styles.forEach((style) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "style-btn";
        button.dataset.style = style;
        button.textContent = style;
        button.addEventListener("click", () => {
            activeStyle = style;
            activeYear = null;
            setActiveStyleButton(style);
            updateView();
        });
        styleFilter.appendChild(button);
    });
}

function renderSortButtons() {
    sortOptions.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "sort-btn";
        button.dataset.sort = option.value;
        button.textContent = option.label;
        button.addEventListener("click", () => {
            activeSort = option.value;
            setActiveSortButton(option.value);
            updateView();
        });
        sortControls.appendChild(button);
    });

    setActiveSortButton(activeSort);
}

function renderFilterTags() {
    filterContainer.innerHTML = "";

    if (activeYear === null) {
        return;
    }

    const tag = document.createElement("button");
    tag.type = "button";
    tag.className = "filter-tag";
    tag.textContent = `År: ${activeYear} ×`;
    tag.addEventListener("click", () => {
        activeYear = null;
        activeStyle = "";
        setActiveStyleButton("");
        updateView();
    });

    filterContainer.appendChild(tag);
}

function filterAndSortBeers() {
    const search = searchInput.value.trim().toLowerCase();
    let filtered = [...beers];

    if (activeYear !== null) {
        filtered = filtered.filter((beer) => beer.year === activeYear);
    }

    if (search) {
        filtered = filtered.filter((beer) =>
            beer.name.toLowerCase().includes(search) ||
            (beer.style && beer.style.toLowerCase().includes(search))
        );
    }

    if (activeStyle) {
        filtered = filtered.filter((beer) => beer.style === activeStyle);
    }

    if (activeSort === "year-desc") {
        filtered.sort((a, b) => b.year - a.year);
    }

    if (activeSort === "year-asc") {
        filtered.sort((a, b) => a.year - b.year);
    }

    if (activeSort === "abv-desc") {
        filtered.sort((a, b) => (parseFloat(b.abv) || 0) - (parseFloat(a.abv) || 0));
    }

    if (activeSort === "abv-asc") {
        filtered.sort((a, b) => (parseFloat(a.abv) || 0) - (parseFloat(b.abv) || 0));
    }

    return filtered;
}

function updateView() {
    renderBeers(filterAndSortBeers());
    renderFilterTags();
}

function openModal(beer, img) {
    modalTitle.textContent = beer.name;
    modalImage.src = img;
    modalImage.alt = beer.name;
    modalImage.onerror = () => {
        modalImage.src = fallbackImage;
    };
    renderBeerPhotos(beer);

    modalDesc.innerHTML = `<span class="modal-style" data-style="${beer.style || ""}">${beer.style || ""}</span>`;

    let details = `<p>Brygget: <span class="modal-year" data-year="${beer.year}">${beer.year}</span>`;
    if (beer.abv) details += ` | ABV: ${beer.abv}`;
    if (beer.ibu) details += ` | IBU: ${beer.ibu}`;
    if (beer.ebc) details += ` | EBC: ${beer.ebc}`;
    details += "</p>";

    if (beer.notes) {
        details += `<p><strong>Smak:</strong> ${beer.notes}</p>`;
    }

    if (beer.story) {
        details += `<p><strong>Historie:</strong> ${beer.story}</p>`;
    }

    if (beer.ingredients) {
        details += `<div><strong>Bryggedata:</strong> ${beer.ingredients}</div>`;
    }

    modalDetails.innerHTML = details;

    const styleEl = modal.querySelector(".modal-style");
    if (styleEl) {
        styleEl.addEventListener("click", () => {
            activeStyle = beer.style || "";
            activeYear = null;
            setActiveStyleButton(activeStyle);
            closeModal();
            updateView();
        });
    }

    const yearEl = modal.querySelector(".modal-year");
    if (yearEl) {
        yearEl.addEventListener("click", () => {
            activeYear = beer.year;
            activeStyle = "";
            setActiveStyleButton("");
            closeModal();
            updateView();
        });
    }

    if (beer.ebc) {
        const color = ebcToColor(beer.ebc);
        modalContent.style.border = `2px solid ${color}`;
        modalContent.style.boxShadow = `0 24px 70px rgba(20, 15, 10, 0.32), 0 0 0 1px ${color}`;
    } else {
        modalContent.style.border = "";
        modalContent.style.boxShadow = "";
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

searchInput.addEventListener("input", updateView);
closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});

renderStyleButtons();
renderSortButtons();
renderOnTap();
updateView();

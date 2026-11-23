const manualMatches = {
    "Rett i Vranga Premium": "Rett i Vranga.jpg",
    "Rett i Vranga": "Tina 40 Rett i Vranga.jpg",
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

const batchHistory = [
    { beer: "Kveik Pale Ale 200 BPM", batch: 1, brewedOn: "2020-06-14", abv: "4.7%", ibu: 36, ebc: 13, og: "1.050", fg: "1.011" },
    { beer: "Porter Salut Britain", batch: 2, brewedOn: "2021-06-05", abv: "4.7%", ibu: 34, ebc: 75, og: "1.051", fg: "1.015" },
    { beer: "Pils Under Press", batch: 3, brewedOn: "2021-02-22", abv: "5.3%", ibu: 28, ebc: 8, og: "1.047", fg: "1.007", label: "Utepils" },
    { beer: "Witty Peach", batch: 4, brewedOn: "2021-03-13", abv: "5.1%", ibu: 25, ebc: 8, og: "1.051", fg: "1.012" },
    { beer: "Knusk IPA", batch: 5, brewedOn: "2021-03-12", abv: "8.1%", ibu: 20, ebc: 8, og: "1.061", fg: "0.999" },
    { beer: "Porter Salut Britain", batch: 6, brewedOn: "2021-05-01", abv: "5.8%", ibu: 32, ebc: 70, og: "1.062", fg: "1.018" },
    { beer: "Sur Flaten", batch: 7, brewedOn: "2021-06-03", abv: "5.5%", ibu: 20, ebc: 12, og: "1.051", fg: "1.009" },
    { beer: "Witty Peach", batch: 8, brewedOn: "2021-08-25", abv: "5.5%", ibu: 26, ebc: 9, og: "1.051", fg: "1.009" },
    { beer: "Pils Under Press", batch: 9, brewedOn: "2022-08-23", abv: "5.4%", ibu: 37, ebc: 6, og: "1.047", fg: "1.006" },
    { beer: "Porter Salut Britain", batch: 10, brewedOn: "2022-10-13", abv: "6.2%", ibu: 32, ebc: 71, og: "1.062", fg: "1.015" },
    { beer: "Pure Pale Ale", batch: 11, brewedOn: "2023-05-21", abv: "4.9%", ibu: 39, ebc: 16, og: "1.050", fg: "1.016" },
    { beer: "Skeisen Weiss Wisswass Weizen-Wasser", batch: 12, brewedOn: "2023-11-07", abv: "4.1%", ibu: 12, ebc: 8, og: "1.042", fg: "1.011" },
    { beer: "Witty Peach", batch: 13, brewedOn: "2023-11-26", abv: "5.0%", ibu: 26, ebc: 9, og: "1.047", fg: "1.009" },
    { beer: "Pils Beer With Me", batch: 14, brewedOn: "2023-12-10", abv: "4.2%", ibu: 20, ebc: 8, og: "1.042", fg: "1.011" },
    { beer: "Lager '76", batch: 15, brewedOn: "2024-07-04", abv: "5.1%", ibu: 19, ebc: 9, og: "1.051", fg: "1.012" },
    { beer: "Tune Your Oud", batch: 16, brewedOn: "2024-09-22", abv: "6.2%", ibu: 21, ebc: 44, og: "1.059", fg: "1.014" },
    { beer: "Märzen Good & Lovely", batch: 17, brewedOn: "2025-03-22", abv: "5.9%", ibu: 21, ebc: 24, og: "1.060", fg: "1.015" },
    { beer: "Mr. IPA", batch: 18, brewedOn: "2025-04-23", abv: "5.8%", ibu: 39, ebc: 8, og: "1.060", fg: "1.016" },
    { beer: "Rett i Vranga Premium", batch: 19, brewedOn: "2026-09-22", abv: "6.4%", ibu: 34, ebc: 7, og: "1.060", fg: "1.011" },
    { beer: "Rett i Vranga", batch: 20, brewedOn: "2026-10-05", abv: "4.9%", ibu: 34, ebc: 6, og: "1.045", fg: "1.008" },
    { beer: "Porter Salut Britain", batch: 21, brewedOn: "2026-11-11", abv: "6.4%", ibu: 33, ebc: 71, og: "1.066", fg: "1.017", status: "Kondisjonering, dag 12" }
];

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
    "Rett i Vranga": [
        { file: "Rett i Vranga servering.jpeg", caption: "Servering" }
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
        { file: "Marzen Good Lovely glass.jpeg", caption: "Glass" },
        { file: "Marzen Good Lovely glass label.jpeg", caption: "Glass og etikett" }
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

const publishedBeers = beers.filter((beer) => beer.published !== false);
const catalogBeers = publishedBeers.flatMap((beer) => {
    const records = batchHistory.filter((batch) => batch.beer === beer.name);
    if (!records.length) {
        return [beer];
    }

    return records.map((batchRecord) => ({
        ...beer,
        year: Number(batchRecord.brewedOn.slice(0, 4)),
        abv: batchRecord.abv,
        ibu: batchRecord.ibu,
        ebc: batchRecord.ebc,
        og: Number(batchRecord.og),
        fg: Number(batchRecord.fg),
        brewedOn: batchRecord.brewedOn,
        batchRecord
    }));
});
const styles = [...new Set(publishedBeers.map((beer) => beer.style).filter(Boolean))].sort();
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

function formatBrewDate(dateString) {
    return new Intl.DateTimeFormat("nb-NO", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC"
    }).format(new Date(`${dateString}T00:00:00Z`));
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
        <p class="${compact ? "beer-card-abv" : "beer-abv"}">${beer.abv || ""}${beer.brewedOn ? ` · Brygget ${formatBrewDate(beer.brewedOn)}` : ""}</p>
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

    publishedBeers
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
    let filtered = [...catalogBeers];

    if (activeYear !== null) {
        filtered = filtered.filter((beer) => beer.year === activeYear);
    }

    if (search) {
        filtered = filtered.filter((beer) =>
            beer.name.toLowerCase().includes(search) ||
            (beer.style && beer.style.toLowerCase().includes(search)) ||
            (beer.batchRecord && `batch ${beer.batchRecord.batch}`.includes(search))
        );
    }

    if (activeStyle) {
        filtered = filtered.filter((beer) => beer.style === activeStyle);
    }

    if (activeSort === "year-desc") {
        filtered.sort((a, b) => b.year - a.year || (b.brewedOn || "").localeCompare(a.brewedOn || ""));
    }

    if (activeSort === "year-asc") {
        filtered.sort((a, b) => a.year - b.year || (a.brewedOn || "").localeCompare(b.brewedOn || ""));
    }

    if (activeSort === "abv-desc") {
        filtered.sort((a, b) => (parseFloat(b.abv) || 0) - (parseFloat(a.abv) || 0) || b.year - a.year);
    }

    if (activeSort === "abv-asc") {
        filtered.sort((a, b) => (parseFloat(a.abv) || 0) - (parseFloat(b.abv) || 0) || b.year - a.year);
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

    let details;
    if (beer.batchRecord) {
        const batch = beer.batchRecord;
        details = `<p><strong>Brygget</strong> <span class="modal-year" data-year="${beer.year}">${formatBrewDate(batch.brewedOn)}</span> · Brewfather batch #${batch.batch}</p>`;
        details += `<p>ABV: ${batch.abv} | IBU: ${batch.ibu} | EBC: ${batch.ebc} | OG: ${batch.og} | FG: ${batch.fg}</p>`;
        if (batch.status) details += `<p>Status: ${batch.status}</p>`;
    } else {
        details = `<p>Brygget: <span class="modal-year" data-year="${beer.year}">${beer.year}</span>`;
        if (beer.abv) details += ` | ABV: ${beer.abv}`;
        if (beer.ibu) details += ` | IBU: ${beer.ibu}`;
        if (beer.ebc) details += ` | EBC: ${beer.ebc}`;
        details += "</p>";
    }

    if (beer.notes) {
        details += `<p><strong>Smak:</strong> ${beer.notes}</p>`;
    }

    if (beer.story) {
        details += `<p><strong>Historie:</strong> ${beer.story}</p>`;
    }

    if (beer.ingredients) {
        details += `<div><strong>Bryggedata:</strong> ${beer.ingredients}</div>`;
    }

    const beerBatches = batchHistory
        .filter((batch) => batch.beer === beer.name)
        .sort((a, b) => a.brewedOn.localeCompare(b.brewedOn));
    if (beerBatches.length) {
        details += `<h4>Batchhistorikk</h4><ol class="batch-history">${beerBatches.map((batch) => {
            const brewedDate = formatBrewDate(batch.brewedOn);
            const batchName = batch.label ? ` – ${batch.label}` : "";
            const status = batch.status ? ` <span>(${batch.status})</span>` : "";
            return `<li><strong>${brewedDate} — Brewfather batch #${batch.batch}${batchName}</strong>${status}<br>${batch.abv} ABV · ${batch.ibu} IBU · ${batch.ebc} EBC · OG ${batch.og} · FG ${batch.fg}</li>`;
        }).join("")}</ol>`;
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

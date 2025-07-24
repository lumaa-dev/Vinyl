import { owned, wish, strs } from "./data.js";

const app = document.getElementById("app");

// Language detection and persistence
let lang = "en";
try {
	lang = localStorage.getItem("lang") || "en";
} catch (err) {
	console.error("Error accessing localStorage:", err);
}

const queryLang = new URLSearchParams(location.search).get("l");
if (["en", "fr"].includes(queryLang)) {
	lang = queryLang;
	try {
		localStorage.setItem("lang", lang);
	} catch (err) {
		console.error("Error setting localStorage:", err);
	}
}

// Create vinyl DOM element
function createVinyl(item) {
	const div = document.createElement("div");
	div.className = "vinyl";

	const general = document.createElement("span");
	general.className = "general";

	const img = document.createElement("img");
	img.src = `/vinyl/${item.img}`;
	img.draggable = false;
	img.className = item.ownDate ? "compact" : "original";
	general.appendChild(img);

	const section = document.createElement("div");
	section.className = "section";

	const txt = document.createElement("div");
	txt.className = "txt";

	const name = document.createElement("p");
	name.className = "name";
	name.textContent = item.name;

	const artist = document.createElement("p");
	artist.className = "artist";
	artist.textContent = item.artist;

	const date = document.createElement("p");
	date.className = "date";
	date.textContent = new Date(item.ownDate || item.wishDate).toLocaleDateString(
		"fr"
	);

	txt.append(name, artist, date);
	section.appendChild(txt);
	general.appendChild(section);
	div.appendChild(general);

	// Links
	const actions = document.createElement("span");
	actions.className = "actions";

	if (item.discogs) {
		const a = document.createElement("a");
		a.href = item.discogs;
		a.textContent = "Discogs";
		a.style.background = "#121212";
		actions.appendChild(a);
	}

	if (item.available?.official) {
		const a = document.createElement("a");
		a.href = item.available.official;
		a.textContent = "Official";
		actions.appendChild(a);
	}

	if (item.available?.fnac) {
		const a = document.createElement("a");
		a.href = item.available.fnac;
		a.textContent = "Fnac";
		a.style.background = "#f5b027";
		a.style.color = "#000";
		actions.appendChild(a);
	}

	if (item.available?.amazon) {
		const a = document.createElement("a");
		a.href = item.available.amazon;
		a.textContent = "Amazon";
		a.style.background = "#0578ff";
		a.style.color = "#fff";
		actions.appendChild(a);
	}

	div.appendChild(actions);
	return div;
}

// Render the app
function renderSection(items, className) {
	const h1 = document.createElement("h1");
	h1.id = className;
	h1.textContent = strs[lang][className];
	app.appendChild(h1);

	const list = document.createElement("div");
	list.className = `${className}-list`;

	items.forEach((item) => {
		list.appendChild(createVinyl(item));
	});

	app.appendChild(list);
}

renderSection(
	owned.sort((a, b) => b.ownDate - a.ownDate),
	"owned"
);
renderSection(
	wish.sort((a, b) => a.priority - b.priority),
	"wish"
);

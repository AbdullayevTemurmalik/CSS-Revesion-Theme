import { cssData } from "./data/css-data.js";

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const menuButtons = document.querySelectorAll(".menu-btn");
const mainLogo = document.getElementById("mainLogo");

function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";
  if (data.length === 0) {
    resultsDiv.innerHTML =
      "<p style='width:100%; text-align:center; color:#64748b; padding:50px;'>Hech narsa topilmadi...</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const highlight = (text) => {
      if (!term || term.trim() === "") return text;
      const regex = new RegExp(`(${term})`, "gi");
      return text.replace(regex, (match) => `<mark>${match}</mark>`);
    };

    card.innerHTML = `
            <h3>${highlight(item.title)} <span class="badge">${item.category}</span></h3>
            <p style="margin-bottom:15px; color:#94a3b8;">${item.desc}</p>
            <p class="reja">📌 <strong>Reja:</strong> ${item.reja}</p>
            <p class="vazifa">📝 <strong>Vazifa:</strong> ${item.vazifa}</p>
            <pre><code>${item.example}</code></pre>
        `;
    resultsDiv.appendChild(card);
  });
}

function handleSearch(term) {
  const norm = term.toLowerCase().trim();
  const filtered = cssData.filter(
    (i) =>
      i.title.toLowerCase().includes(norm) ||
      i.category.toLowerCase().includes(norm) ||
      i.desc.toLowerCase().includes(norm),
  );
  displayResults(filtered, norm);
}

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    const cat = btn.getAttribute("data-category");
    if (cat === "all") {
      searchInput.value = "";
      displayResults(cssData, "");
    } else {
      searchInput.value = cat;
      handleSearch(cat);
    }
  });
});

searchInput.addEventListener("input", (e) => {
  const term = e.target.value;
  if (term === "") {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    document.querySelector('[data-category="all"]').classList.add("active");
    displayResults(cssData, "");
  } else {
    handleSearch(term);
  }
});

mainLogo.addEventListener("click", () => {
  searchInput.value = "";
  displayResults(cssData, "");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

displayResults(cssData, "");

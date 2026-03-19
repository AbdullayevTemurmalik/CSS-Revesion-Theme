import { cssData } from "./data/css-data.js";

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const menuButtons = document.querySelectorAll(".menu-btn");
const mainLogo = document.getElementById("mainLogo");

// HTML teglarini kod ko'rinishida saqlab qolish uchun funksiya (ayniqsa Tailwind darsi uchun kerak)
const escapeHTML = (str) => {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

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

    // KARTOCKA ICHIDAGI YANGI STRUKTURA
    card.innerHTML = `
            <h3>${highlight(item.title)} <span class="badge">${item.category}</span></h3>
            <p style="margin-bottom:15px; color:#94a3b8;">${item.desc}</p>
            
            <div class="code-box" style="margin-top:20px;">
                <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:8px;">💻 Kod:</span>
                <pre style="background:#000; padding:20px; border-radius:12px; border:1px solid #1e293b; overflow-x:auto;"><code style="color:#fb7185; font-family:'JetBrains Mono', monospace; font-size:14px; line-height:1.5;">${escapeHTML(item.code)}</code></pre>
            </div>

            <div class="result-box" style="margin-top:20px; margin-bottom:20px;">
                <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:8px;">👀 Natija:</span>
                <div style="background:#f8fafc; color:#020617; padding:15px; border-radius:12px; border:2px dashed #0ea5e9; min-height:40px; overflow-x:auto;">
                    ${item.result}
                </div>
            </div>

            <p class="reja">📌 <strong>Reja:</strong> ${item.reja}</p>
            <p class="vazifa" style="color:#10b981; margin-top:10px;">📝 <strong>Vazifa:</strong> ${item.vazifa}</p>
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
  document.querySelector(".menu-btn.active")?.classList.remove("active");
  document.querySelector('[data-category="all"]').classList.add("active");
  displayResults(cssData, "");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sayt ochilganda barcha ma'lumotlarni chiqarish
displayResults(cssData, "");

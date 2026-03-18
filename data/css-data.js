export const cssData = [
  {
    id: 1,
    title: "CSS nima o'zi? (Asoslar)",
    category: "Asoslar",
    desc: "Agar HTML-ni uyning g'ishti desak, CSS - bu uyning bo'yog'i, dizayni va pardozidir. CSS saytni chiroyli qiladi.",
    reja: "CSS-ni ulash (External, Internal, Inline), ranglar va shriftlar.",
    vazifa:
      "index.html faylingizga style.css-ni ulab, orqa fon rangini o'zgartiring.",
    example:
      "/* style.css faylida yoziladi */\nbody {\n  background-color: #020617;\n  color: white;\n}",
  },
  {
    id: 2,
    title: "Tanlab olish (Selectors)",
    category: "Selectors",
    desc: "CSS-da biron bir elementga rang berish uchun avval uni 'chaqirib' olish kerak. Bu xuddi: 'Ey ko'k ko'ylakli bola, botiq kel' degan gapdek gap.",
    reja: "Teg nomi, Class (.) va ID (#) orqali elementlarni tanlash.",
    vazifa:
      "Bitta sarlavhaga ID berib rangini qizil, class berib matnini o'rtaga tekislang.",
    example:
      ".mening-classim { color: blue; }\n#mening-idim { font-size: 20px; }",
  },
  {
    id: 3,
    title: "Box Model (Quti modeli)",
    category: "Box Model",
    desc: "HTML-dagi har bir element - bu bitta quti. Uning chegarasi (border), ichki masofasi (padding) va tashqi masofasi (margin) bor.",
    reja: "Content, Padding, Border va Margin farqlarini tushunish.",
    vazifa:
      "Bitta div yarating, unga chegara bering va ichidan joy oching (padding).",
    example:
      ".box {\n  margin: 20px; /* Tashqi tomondan surish */\n  padding: 10px; /* Ichki tomondan surish */\n  border: 2px solid white;\n}",
  },
  {
    id: 4,
    title: "Ranglar va Fonlar",
    category: "Asoslar",
    desc: "Saytga rang berishning 3 xil yo'li bor: nomi (red), RGB kodi yoki HEX kodi (#ffffff). Shuningdek, orqaga rasm ham qo'ysa bo'ladi.",
    reja: "Color, background-color, background-image va gradientlar.",
    vazifa:
      "Saytingiz foniga chiroyli ranglar aralashmasi (linear-gradient) bering.",
    example:
      ".header {\n  background: linear-gradient(to right, #0ea5e9, #2563eb);\n}",
  },
  {
    id: 5,
    title: "Flexbox (Moslashuvchan joylashuv)",
    category: "Flexbox",
    desc: "Elementlarni bitta qatorga terish va ularni o'rtaga yoki chetga tekislash uchun eng zo'r qurol - bu Flexbox.",
    reja: "display: flex, justify-content, align-items va gap.",
    vazifa:
      "3 ta qutini bitta qatorga yonma-yon terib, oralarini ochib qo'ying.",
    example:
      ".container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}",
  },
  {
    id: 6,
    title: "Position (Joylashuv)",
    category: "Position",
    desc: "Elementni ekranning xohlagan joyiga 'mixlab' qo'yish yoki uni joyidan biroz surish uchun ishlatiladi.",
    reja: "Relative, Absolute va Fixed (ekranda qotib turish) joylashuvlari.",
    vazifa: "Navbar-ni tepada qotib turadigan (fixed) holatga keltiring.",
    example: ".navbar {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}",
  },
  {
    id: 7,
    title: "CSS Grid (Jadval tartibi)",
    category: "Grid",
    desc: "Flexbox - bitta qator uchun, Grid esa butun bir 'setka' (katakchalar) yaratish uchun ishlatiladi.",
    reja: "display: grid, grid-template-columns va grid-gap.",
    vazifa: "Saytda 4 ta ustundan iborat rasmgalereya setkasini yasang.",
    example:
      ".gallery {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n}",
  },
  {
    id: 8,
    title: "O'lchamlar (px, rem, %)",
    category: "Asoslar",
    desc: "CSS-da o'lchamlarni har xil berish mumkin. 'px' qotib turadi, '%' esa ekranga qarab o'zgaradi.",
    reja: "Pixel (px), Percentage (%), REM va VH/VW o'lchov birliklari.",
    vazifa: "Konteyner kengligini 80% qilib, o'rtaga joylang (margin: auto).",
    example:
      ".container {\n  width: 80%;\n  max-width: 1200px;\n  margin: auto;\n}",
  },
  {
    id: 9,
    title: "Transitions (Yumshoq o'tishlar)",
    category: "Animation",
    desc: "Tugmaning ustiga borganda rangi darrov emas, sekin va chiroyli o'zgarishi uchun 'transition' kerak.",
    reja: "transition-duration, transition-property va ease-in-out.",
    vazifa:
      "Tugma ustiga borganda u sekin kattalashadigan (transform: scale) qiling.",
    example:
      ".btn {\n  transition: all 0.3s ease;\n}\n.btn:hover { transform: scale(1.1); }",
  },
  {
    id: 10,
    title: "Animations (Harakatlar)",
    category: "Animation",
    desc: "Saytingizdagi elementlarni xohlagancha aylantirish, uchirish yoki sakratish uchun ishlatiladi.",
    reja: "@keyframes va animation xususiyatlari.",
    vazifa: "Logotipni har doim sekin aylanib turadigan qiling.",
    example:
      "@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.logo { animation: spin 5s linear infinite; }",
  },
  {
    id: 11,
    title: "Media Queries (Telefonlar uchun)",
    category: "Asoslar",
    desc: "Saytingiz kompyuterda ham, telefonda ham bir xil chiroyli ko'rinishi uchun media so'rovlar kerak.",
    reja: "@media (max-width: 768px) va mobil dizayn.",
    vazifa: "Ekran 600px dan kichrayganda sarlavha shriftini kichraytiring.",
    example: "@media (max-width: 600px) {\n  h1 { font-size: 20px; }\n}",
  },
  {
    id: 12,
    title: "Final: CSS Master!",
    category: "Asoslar",
    desc: "Tabriklayman! Siz endi dizayn olamining kalitini qo'lga kiritdingiz. Endi bor bilimingizni bitta loyihada ishlating.",
    reja: "Portfolio yoki Landing page dizaynini noldan chizish.",
    vazifa: "O'zingiz haqingizda neon uslubidagi chiroyli vizitka sayt yasang.",
    example: "/* Omad yor bo'lsin, dizayner! */",
  },
  {
    id: 13,
    title: "Tailwind CSS (Modern)",
    category: "Tailwind",
    desc: "Tailwind - bu tayyor class-lar to'plami. CSS fayl ochmasdan HTML-ning o'zida dizayn berish mumkin.",
    reja: "Utility-first tushunchasi, ranglar (bg-blue-500) va padding (p-4).",
    vazifa: "CDN orqali Tailwind-ni ulab, bitta chiroyli tugma yasang.",
    example:
      "\n<button class='bg-blue-500 p-4 rounded-xl text-white'>\n  Tugma\n</button>",
  },
];

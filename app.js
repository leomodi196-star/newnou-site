const products = [
  {
    name: "Moonline Necklace",
    category: "necklace",
    badge: "New",
    price: "$48",
    desc: "An adjustable collarbone chain, easy to wear solo or layered with pearls.",
    focus: "63% 52%"
  },
  {
    name: "Dew Pearl Studs",
    category: "earring",
    badge: "Gift",
    price: "$39",
    desc: "Small freshwater-inspired pearls in a gold-tone setting for effortless polish.",
    focus: "77% 45%"
  },
  {
    name: "Emerald Glow Ring",
    category: "ring",
    badge: "Limited",
    price: "$56",
    desc: "A slim band with an emerald-toned stone, made to anchor a ring stack.",
    focus: "68% 72%"
  },
  {
    name: "Woven Light Bracelet",
    category: "bracelet",
    badge: "Classic",
    price: "$44",
    desc: "Soft gold-tone chain links with an adjustable tail for a comfortable fit.",
    focus: "83% 62%"
  },
  {
    name: "Stardust Ring Set",
    category: "ring",
    badge: "Set",
    price: "$68",
    desc: "Three slim rings combining shine, pearl detail, and delicate stone accents.",
    focus: "55% 76%"
  },
  {
    name: "Silk Drop Earrings",
    category: "earring",
    badge: "Best",
    price: "$52",
    desc: "A graceful drop silhouette for dinners, events, and dressed-up evenings.",
    focus: "73% 37%"
  },
  {
    name: "Crescent Pendant",
    category: "necklace",
    badge: "Light",
    price: "$54",
    desc: "A curved pendant that sits neatly at the neckline with quiet presence.",
    focus: "61% 42%"
  },
  {
    name: "Pearl Link Bracelet",
    category: "bracelet",
    badge: "Pearl",
    price: "$62",
    desc: "Gold-tone links and pearl accents that add glow to everyday looks.",
    focus: "82% 57%"
  },
  {
    name: "Luna Hoop Earrings",
    category: "earring",
    badge: "Daily",
    price: "$46",
    desc: "Small polished hoops with enough shine for workdays and weekends.",
    focus: "75% 44%"
  },
  {
    name: "Fine Signet Ring",
    category: "ring",
    badge: "Edit",
    price: "$58",
    desc: "A slim signet profile made for stacking with delicate bands.",
    focus: "48% 74%"
  },
  {
    name: "Soft Chain Choker",
    category: "necklace",
    badge: "Layer",
    price: "$50",
    desc: "A short chain that creates a clean base for layered necklaces.",
    focus: "59% 38%"
  },
  {
    name: "Stone Dot Bracelet",
    category: "bracelet",
    badge: "Color",
    price: "$57",
    desc: "A fine bracelet with a single stone detail for a subtle color note.",
    focus: "80% 60%"
  }
];

const labels = {
  necklace: "Necklace",
  earring: "Earring",
  ring: "Ring",
  bracelet: "Bracelet"
};

const grid = document.querySelector("#productGrid");
const cartCount = document.querySelector("#cartCount");
const filterButtons = document.querySelectorAll(".filter");
const jumpFilters = document.querySelectorAll("[data-jump-filter]");
let cartTotal = 0;

function renderProducts(filter = "all") {
  const visible = filter === "all" ? products : products.filter((item) => item.category === filter);

  grid.innerHTML = visible.map((item) => `
    <article class="product-card" data-category="${item.category}">
      <div class="product-media">
        <img src="assets/jewelry-hero.png" alt="${item.name}" style="object-position: ${item.focus}">
        <span class="product-badge">${item.badge}</span>
        <button class="favorite" type="button" aria-label="Save ${item.name}">Save</button>
      </div>
      <div class="product-info">
        <div class="product-title-row">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${labels[item.category]} - ${item.desc}</p>
        <div class="product-action-row">
          <button class="add-cart" type="button">Add to Bag</button>
        </div>
      </div>
    </article>
  `).join("");
}

function setFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });
  renderProducts(filter);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

jumpFilters.forEach((link) => {
  link.addEventListener("click", () => setFilter(link.dataset.jumpFilter));
});

grid.addEventListener("click", (event) => {
  const favorite = event.target.closest(".favorite");
  const addCart = event.target.closest(".add-cart");

  if (favorite) {
    favorite.classList.toggle("is-loved");
    favorite.textContent = favorite.classList.contains("is-loved") ? "Saved" : "Save";
  }

  if (addCart) {
    cartTotal += 1;
    cartCount.textContent = cartTotal;
    addCart.textContent = "Added";
    window.setTimeout(() => {
      addCart.textContent = "Add to Bag";
    }, 900);
  }
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Subscribed";
  window.setTimeout(() => {
    button.textContent = "Subscribe";
  }, 1200);
});

renderProducts();

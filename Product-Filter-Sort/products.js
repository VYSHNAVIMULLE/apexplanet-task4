const products = [
  { name: "Laptop", price: 45000, category: "electronics", rating: 4.5 },
  { name: "Wireless Earbuds", price: 1500, category: "electronics", rating: 4.2 },
  { name: "Fiction Book", price: 500, category: "books", rating: 4.8 },
  { name: "Notebook", price: 120, category: "books", rating: 4.1 },
  { name: "Dress", price: 999, category: "fashion", rating: 4.0 },
  { name: "Smart Watch", price: 2000, category: "electronics", rating: 3.9 },
  { name: "Sunglasses", price: 600, category: "fashion", rating: 4.3 },
];

let filteredProducts = [...products];

function displayProducts(items) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    container.appendChild(card);
  });
}

function filterProducts() {
  const selected = document.getElementById("categoryFilter").value;

  if (selected === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(p => p.category === selected);
  }

  sortProducts(); // apply sort after filter
}

function sortProducts() {
  const order = document.getElementById("sortOrder").value;

  if (order === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (order === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(filteredProducts);
}

window.onload = () => {
  displayProducts(products);
};

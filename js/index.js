import { getProducts } from "./getProducts.js";
import { renderProducts } from "./renderProducts.js";
import { getCart } from "./getCart.js";
const products = await getProducts();
const cart = await getCart();
const numberOfProducts = document.getElementById("numberOfProducts");
numberOfProducts.textContent = cart.length;
const productsContainer = document.getElementById("productsContainer");
productsContainer.addEventListener("click", (e) => handleClick(e));
function handleClick(e) {
  if (!e.target.dataset.id) return;
  const product = products.find(
    (item) => item.id === Number(e.target.dataset.id)
  );
  cart.push(product);
  window.localStorage.setItem("cart", JSON.stringify(cart));
  numberOfProducts.textContent = cart.length;
}

renderProducts(products, productsContainer);

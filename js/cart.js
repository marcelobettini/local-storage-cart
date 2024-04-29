import { getCart } from "./getCart.js";
const cartProductsList = document.getElementById("cartProductsList");
const productsInCart = await getCart();
for (let prod of productsInCart) {
  const item = document.createElement("li");
  item.innerText = prod.title;
  cartProductsList.appendChild(item);
}

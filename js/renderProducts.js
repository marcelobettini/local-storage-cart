export const renderProducts = (productsList, htmlContainer) => {
  for (let product of productsList) {
    let card = document.createElement("article");
    //TODO: style card
    card.className = "outerCardContainer";
    card.innerHTML = `
        <h4>${product.title}</h4>
        <div class="innerCardContainer">
        <img src="${product.image}" alt="${product.title}">
        <div class="cardRight">
        <p>${product.category}</p>
        <p>$${product.price}</p>
        <button id='btnAddToCart' data-id=${product.id} >Add to cart</button>
        </div>
        </div>
        `;
    htmlContainer.appendChild(card);
  }
};

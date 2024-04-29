export const getCart = async () => {
  const productsInCart = window.localStorage.getItem("cart");
  const cart = JSON.parse(productsInCart);
  return cart || [];
};

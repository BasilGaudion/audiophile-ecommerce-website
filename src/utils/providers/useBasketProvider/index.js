import { createContext } from 'react';

export const BasketContext = createContext();

const useBasketProvider = () => {

  const addToCart = (product, quantity) => {
    let cart = localStorage.getItem('basket');
    cart = cart ? JSON.parse(cart) : [];

    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      productExists.quantity += quantity;
    }
    else {
      const productToAdd = {
        id: product.id,
        name: product.name,
        image: product.categoryImage.mobile,
        price: product.price,
        quantity,
      };
      cart.push(productToAdd);
    }

    localStorage.setItem('basket', JSON.stringify(cart));
  };

  return {
    addToCart,
  };
};

export default useBasketProvider;

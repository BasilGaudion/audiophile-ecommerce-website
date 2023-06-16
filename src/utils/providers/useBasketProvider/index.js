import { createContext, useState } from 'react';

export const BasketContext = createContext();

const useBasketProvider = () => {
  const [hasProduct, setHasProduct] = useState(false);

  const seeIfProductInBasket = () => {
    const basketExist = localStorage.getItem('basket');

    if (basketExist && basketExist.length > 0) {
      setHasProduct(true);
    }
    else {
      setHasProduct(false);
    }
  };

  const addToCart = (product, quantity) => {
    setHasProduct(true);
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
    setHasProduct,
    hasProduct,
    seeIfProductInBasket,
  };
};

export default useBasketProvider;

import { createContext, useEffect, useState } from 'react';
import productsData from './data.json';

export const ProductsContext = createContext();

const useProductsProvider = () => {
  const [productsByCategory, setproductsByCategory] = useState([]);

  const getProductsByCategory = (category) => {
    const result = productsData.filter(product => product.category === category);
    console.log("🚀 ~ file: index.js:11 ~ getProductsByCategory ~ result:", result);
  };
  // on retourne l'objet qu'on passera au provider afin qu'il soit disponible partout
  return {
    getProductsByCategory,
    productsByCategory,

  };
};

export default useProductsProvider;

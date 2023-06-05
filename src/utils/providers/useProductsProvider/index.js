import { createContext, useState } from 'react';
import productsData from './data.json';

export const ProductsContext = createContext();

const useProductsProvider = () => {
  const [productsByCategory, setproductsByCategory] = useState([]);
  const [currentProduct, setCurrentProduct] = useState('');
  const [currentProductData, setCurrentProductData] = useState({});

  const getProductsByCategory = (category) => {
    const result = productsData.filter((product) => product.category === category);
    setproductsByCategory(result);
  };

  const getCurrentProduct = (slug) => {
    const productFind = productsData.find((product) => product.slug === slug);
    return productFind;
  };

  return {
    getProductsByCategory,
    productsByCategory,
    currentProduct,
    getCurrentProduct,
    currentProductData,
    setCurrentProduct,
    setCurrentProductData,
  };
};

export default useProductsProvider;

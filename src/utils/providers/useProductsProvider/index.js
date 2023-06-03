import { createContext, useEffect, useState } from 'react';
import productsData from './data.json';

export const ProductsContext = createContext();

const useProductsProvider = () => {
//   const [currentCategory, setCurrentCategory] = useState();
//   const [allCategories] = useState(categoriesData.categories);

  // on retourne l'objet qu'on passera au provider afin qu'il soit disponible partout
  return {

  };
};

export default useProductsProvider;

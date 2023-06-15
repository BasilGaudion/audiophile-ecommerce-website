import { createContext, useEffect, useState } from 'react';
import categoriesData from './data.json';

export const CategoriesContext = createContext();

const useCategoriesProvider = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [allCategories] = useState(categoriesData.categories);

  // on retourne l'objet qu'on passera au provider afin qu'il soit disponible partout
  return {
    currentCategory,
    allCategories,
    setCurrentCategory,
  };
};

export default useCategoriesProvider;

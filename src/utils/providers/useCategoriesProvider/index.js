import { createContext, useEffect, useState } from 'react';

export const CategoriesContext = createContext();

const useCategoriesProvider = () => {
  const [currentCategory, setCurrentCategory] = useState();

  // on retourne l'objet qu'on passera au provider afin qu'il soit disponible partout
  return {
    currentCategory,
    // address,
    // setAddress,
    // setLocalStorage,
    // currentPostalCode,
    // setCurrentPostalCode,
  };
};

export default useCategoriesProvider;

import { createContext, useState } from 'react';

export const BasketContext = createContext();

const useBasketProvider = () => {
  const [stateName, setStateName] = useState();

  return {
  };
};

export default useBasketProvider;

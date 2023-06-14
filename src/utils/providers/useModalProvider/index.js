import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext();

const useModalProvider = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOrder, setIsVisibleOrder] = useState(false);
  const [isVisibleCategories, setIsVisibleCategories] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isVisible);
  }, [isVisible]);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleIsVisibleOrder = () => {
    setIsVisibleOrder(!isVisibleOrder);
  };

  const handleIsVisibleCategories = () => {
    setIsVisibleCategories(!isVisibleCategories);
  };

  return {
    isVisible,
    handleIsVisible,
    setIsVisible,
    isVisibleOrder,
    handleIsVisibleOrder,
    setIsVisibleOrder,
    isVisibleCategories,
    handleIsVisibleCategories,
    setIsVisibleCategories,
  };
};

export default useModalProvider;

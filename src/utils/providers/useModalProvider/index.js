import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext();

const useModalProvider = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleOrder, setIsVisibleOrder] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isVisible);
  }, [isVisible]);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleIsVisibleOrder = () => {
    setIsVisibleOrder(!isVisibleOrder);
  };

  return {
    isVisible,
    handleIsVisible,
    setIsVisible,
    isVisibleOrder,
    handleIsVisibleOrder,
    setIsVisibleOrder,
  };
};

export default useModalProvider;

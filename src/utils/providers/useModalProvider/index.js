import { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext();

const useModalProvider = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isVisible);
  }, [isVisible]);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return {
    isVisible,
    handleIsVisible,
    setIsVisible,
  };
};

export default useModalProvider;

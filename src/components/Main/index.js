import { useContext } from 'react';
import './styles.scss';
import { ModalContext } from '../../utils/providers/useModalProvider';

const Main = ({ children }) => {
  const { isVisible, setIsVisible } = useContext(ModalContext);

  const handleBackgroundClick = () => {
    setIsVisible(false);
  };

  return (
    <main className="main">
      {isVisible && <div className="modal-background" onClick={handleBackgroundClick} />}
      <main className="content">
        {children}
      </main>
    </main>
  );
};

export default Main;

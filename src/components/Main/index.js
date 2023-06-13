import { useContext } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { ModalContext } from '../../utils/providers/useModalProvider';

const Main = ({ children }) => {
  const {
    isVisible,
    setIsVisible,
    isVisibleOrder,
    setIsVisibleOrder,
  } = useContext(ModalContext);

  const handleBackgroundClick = () => {
    setIsVisible(false);
    setIsVisibleOrder(false);
  };

  return (
    <main className="main">
      {(isVisible || isVisibleOrder) && <div className="modal-background" onClick={handleBackgroundClick} />}
      <main className="content">
        {children}
      </main>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

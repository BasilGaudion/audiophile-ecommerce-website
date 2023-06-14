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
    isVisibleCategories,
    setIsVisibleCategories,
  } = useContext(ModalContext);

  const handleBackgroundClick = () => {
    setIsVisible(false);
    setIsVisibleOrder(false);
    setIsVisibleCategories(false);
  };

  return (
    <main className="main">
      {(isVisible || isVisibleOrder || isVisibleCategories) && <div className="modal-background" onClick={handleBackgroundClick} />}
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

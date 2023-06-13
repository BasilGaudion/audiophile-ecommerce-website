import './styles.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../utils/providers/useModalProvider';
import { CategoriesContext } from '../../utils/providers/useCategoriesProvider';

import basket from '../../assets/icons/basket.svg';
import logo from '../../assets/icons/audiophile-logo.svg';
import Basket from '../Basket';

const Header = () => {
  const { isVisible, handleIsVisible } = useContext(ModalContext);
  const { allCategories } = useContext(CategoriesContext);

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__icon">
          <input type="checkbox" id="menu-brg" />
          <label htmlFor="menu-brg">
            <span> </span>
          </label>
        </div>
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <div className="header__categories">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            {allCategories.map((category) => {
              return (
                <Link to={`/${category.type}`} key={category.id}>
                  <li>{category.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <img className="header__icon" src={basket} alt="" onClick={handleIsVisible} />
      </div>
      {isVisible && <Basket />}
    </header>
  );
};

export default Header;

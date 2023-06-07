import './styles.scss';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ModalContext } from '../../utils/providers/useModalProvider';
import basket from '../../assets/icons/basket.svg';
import logo from '../../assets/icons/audiophile-logo.svg';
import Basket from '../Basket';

const Header = () => {
  const { isVisible, handleIsVisible } = useContext(ModalContext);

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
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </div>
        <img className="header__icon" src={basket} alt="" onClick={handleIsVisible}/>
      </div>
      {isVisible && <Basket />}
    </header>
  );
};

export default Header;

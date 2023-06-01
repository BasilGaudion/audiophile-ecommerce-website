import './styles.scss';
import basket from '../../assets/icons/basket.svg';
import logo from '../../assets/icons/audiophile-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__icon">
          <input type="checkbox" id="menu-brg" />
          <label htmlFor="menu-brg">
            <span> </span>
          </label>
        </div>
        <img className="header__logo" src={logo} alt="" />
        <img className="header__icon" src={basket} alt="" />
      </div>
    </header>
  );
};

export default Header;
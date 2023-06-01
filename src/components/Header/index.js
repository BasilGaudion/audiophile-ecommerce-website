import './styles.scss';
import basket from '../../assets/icons/basket.svg';
import logo from '../../assets/icons/audiophile-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__container--icon">
          <input type="checkbox" id="menu-brg" />
          <label htmlFor="menu-brg">
            <span> </span>
          </label>
        </div>
        <img className="header__container--logo" src={logo} alt="" />
        <img className="header__container--icon" src={basket} alt="" />
      </div>
    </header>
  );
};

export default Header;

import './styles.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/audiophile-logo.svg';
import fbLogo from '../../assets/icons/facebook.svg';
import instaLogo from '../../assets/icons/instagram.svg';
import twitterLogo from '../../assets/icons/twitter.svg';
import { CategoriesContext } from '../../utils/providers/useCategoriesProvider';

const Footer = () => {
  const { allCategories } = useContext(CategoriesContext);

  return (
    <footer className="footer">
      <div className="footer__container container">
        <section className="footer__categories">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="footer__items">
            <Link to="/">
              <li className="footer__item">Home</li>
            </Link>
            {allCategories.map((category) => {
              return (
                <Link to={`/${category.type}`} key={category.id}>
                  <li className="footer__item">{category.name}</li>
                </Link>
              );
            })}
          </ul>
        </section>
        <section className="footer__info">
          <p className="footer__text">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </section>
        <section className="footer__aside">
          <p className="footer__copyright">Copyright 2023. All Rights Reserved</p>
          <section className="footer__social">
            <img src={fbLogo} alt="facebook logo" />
            <img src={twitterLogo} alt="twitter logo" />
            <img src={instaLogo} alt="instagram logo" />
          </section>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

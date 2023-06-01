import './styles.scss';
import logo from '../../assets/icons/audiophile-logo.svg';
import fbLogo from '../../assets/icons/facebook.svg';
import instaLogo from '../../assets/icons/instagram.svg';
import twitterLogo from '../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <img src={logo} alt="logo" />
        <section className="footer__categories">
          <ul className="footer__items">
            <li className="footer__item">Home</li>
            <li className="footer__item">Headphones</li>
            <li className="footer__item">Speakers</li>
            <li className="footer__item">Earphones</li>
          </ul>
        </section>
        <section className="footer__info">
          <p className="footer__text">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="footer__copyright">Copyright 2023. All Rights Reserved</p>
        </section>
        <section className="footer__social">
          <img src={fbLogo} alt="facebook logo" />
          <img src={instaLogo} alt="instagram logo" />
          <img src={twitterLogo} alt="twitter logo" />
        </section>
      </div>
    </footer>
  );
};

export default Footer;

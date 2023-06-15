import './styles.scss';
import { Link } from 'react-router-dom';
import mobilHeroImgMobile from '../../../assets/images/home/mobile/image-header.jpg';
import mobilHeroImgTablet from '../../../assets/images/home/tablet/image-header.jpg';
import mobilHeroImgDesktop from '../../../assets/images/home/desktop/image-hero.jpg';

const HeroSection = () => {
  return (
    <section className="hero">
      <picture>
        <source srcSet={mobilHeroImgMobile} media="(max-width: 767px)" />
        <source srcSet={mobilHeroImgTablet} media="(min-width: 768px) and (max-width: 1440px)" />
        <source srcSet={mobilHeroImgDesktop} media="(min-width: 1024px)" />
        <img className="hero__image" src={mobilHeroImgMobile} alt="Xx99 mark 2 Headphones" />
      </picture>
      <div className="hero__container">
        <h3 className="hero__subtitle">New product</h3>
        <h2 className="hero__title">Xx99 mark ii Headphones</h2>
        <p className="hero__text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to="/headphones/xx99-mark-two-headphones">
          <button className="hero__button" type="button">See product</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

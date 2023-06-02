import './styles.scss';
import headphonesManMobile from '../../assets/images/shared/mobile/image-best-gear.jpg';
import headphonesManTablet from '../../assets/images/shared/tablet/image-best-gear.jpg';
import headphonesManDesktop from '../../assets/images/shared/desktop/image-best-gear.jpg';

const StoreDescription = () => {
  return (
    <section className="storeDescription">
      <div className="storeDescription__container container">
        <picture>
          <source srcSet={headphonesManMobile} media="(max-width: 767px)" />
          <source srcSet={headphonesManTablet} media="(min-width: 768px) and (max-width: 1440px)" />
          <source srcSet={headphonesManDesktop} media="(min-width: 1024px)" />
          <img className="storeDescription__image" src={headphonesManMobile} alt="man listening music" />
        </picture>
      </div>
      <article className="storeDescription__container container">
        <h2 className="storeDescription__title">Bringing you the <span>best</span> audio gear</h2>
        <p className="storeDescription__text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </article>
    </section>
  );
};

export default StoreDescription;

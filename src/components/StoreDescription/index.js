import './styles.scss';
import headphonesMan from '../../assets/images/shared/mobile/image-best-gear.jpg';

const StoreDescription = () => {
  return (
    <section className="storeDescription">
      <div className="storeDescription__container container">
        <img className="storeDescription__image" src={headphonesMan} alt="man listening music" />
      </div>
      <article className="storeDescription__container container">
        <h2 className="storeDescription__title">Bringing you the <span>best</span> audio gear</h2>
        <p className="storeDescription__text">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </article>
    </section>
  );
};

export default StoreDescription;

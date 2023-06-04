import './styles.scss';
import { useState } from 'react';
import headphonesMobile from '../../../assets/images/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import headphonesTablet from '../../../assets/images/product-xx99-mark-two-headphones/tablet/image-product.jpg';
import headphonesDesktop from '../../../assets/images/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import gallery1Mobile from '../../../assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import gallery2Mobile from '../../../assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import gallery3Mobile from '../../../assets/images/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';
import gallery1Tablet from '../../../assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg';
import gallery2Tablet from '../../../assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg';
import gallery3Tablet from '../../../assets/images/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg';
import gallery1Desktop from '../../../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import gallery2Desktop from '../../../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import gallery3Desktop from '../../../assets/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
import sharedHeadphonesMobile from '../../../assets/images/shared/mobile/image-xx99-mark-one-headphones.jpg';
import sharedHeadphonesTablet from '../../../assets/images/shared/tablet/image-xx99-mark-one-headphones.jpg';
import sharedHeadphonesDesktop from '../../../assets/images/shared/desktop/image-xx99-mark-one-headphones.jpg';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const jsonData = {
    features: 'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
  };

  const text = jsonData.features;
  const lines = text.split('\n');

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding ${quantity} product(s) to the cart.`);
    // ....................
  };

  return (
    <main className="product">
      <div className="product__container container">
        <button className="product__back" type="button">Go Back</button>
        <picture>
          <source srcSet={headphonesMobile} media="(max-width: 767px)" />
          <source srcSet={headphonesTablet} media="(min-width: 768px) and (max-width: 1440px)" />
          <source srcSet={headphonesDesktop} media="(min-width: 1024px)" />
          <img className="product__image" src={headphonesMobile} alt="product headphones" />
        </picture>
        <section className="product__content">
          <h3 className="product__subtitle">New product</h3>
          <h1 className="product__title">XX99 Mark II Headphones </h1>
          <p className="product__text">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <div className="product__price">$ 2,999 </div>
          <div className="product__basketDetails">
            <form onSubmit={handleSubmit}>
              <button onClick={decreaseQuantity} className="product__button--setvalue" type="button">-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
              <button onClick={increaseQuantity} className="product__button--setvalue" type="button">+</button>
              <button type="submit" className="product__button">Add to cart</button>
            </form>
          </div>
        </section>
        <section className="product__features">
          <h2 className="product__secondaryTitle">Features</h2>
          {lines.map((line) => (
            <p className="product__text">
              {line}
            </p>
          ))}
        </section>
        <section className="product__box">
          <h2 className="product__secondaryTitle">In the box</h2>
          <ul className="product__list">
            <li><span>1x</span>Headphone Unit</li>
            <li><span>2x</span>Replacement Earcup</li>
            <li><span>1x</span>User Manual</li>
            <li><span>1x</span>Audio cable</li>
            <li><span>1x</span>Travel Bag</li>
          </ul>
        </section>
        <section className="product__gallery">
          <div className="product__galleryImage">
            <picture>
              <source srcSet={gallery1Mobile} media="(max-width: 767px)" />
              <source srcSet={gallery1Tablet} media="(min-width: 768px) and (max-width: 1440px)" />
              <source srcSet={gallery1Desktop} media="(min-width: 1024px)" />
              <img className="product__image" src={gallery1Mobile} alt="product headphones" />
            </picture>
          </div>
          <div className="product__galleryImage">
            <picture>
              <source srcSet={gallery2Mobile} media="(max-width: 767px)" />
              <source srcSet={gallery2Tablet} media="(min-width: 768px) and (max-width: 1440px)" />
              <source srcSet={gallery2Desktop} media="(min-width: 1024px)" />
              <img className="product__image" src={gallery2Mobile} alt="product headphones" />
            </picture>
          </div>
          <div className="product__galleryImage--big">
            <picture>
              <source srcSet={gallery3Mobile} media="(max-width: 767px)" />
              <source srcSet={gallery3Tablet} media="(min-width: 768px) and (max-width: 1440px)" />
              <source srcSet={gallery3Desktop} media="(min-width: 1024px)" />
              <img className="product__image" src={gallery3Mobile} alt="product headphones" />
            </picture>
          </div>
        </section>
        <section className="product__others">
          <h2 className="product__secondaryTitle">You may also like</h2>
          <div className="product__othersProduct">
            <div className="product__othersImage">
              <picture>
                <source srcSet={sharedHeadphonesMobile} media="(max-width: 767px)" />
                <source srcSet={sharedHeadphonesTablet} media="(min-width: 768px) and (max-width: 1440px)" />
                <source srcSet={sharedHeadphonesDesktop} media="(min-width: 1024px)" />
                <img className="product__image" src={sharedHeadphonesMobile} alt="product headphones" />
              </picture>
            </div>
            <h2 className="product__secondaryTitle">XX99 Mark i</h2>
            <button type="submit" className="product__button">See product</button>
          </div>
          <div className="product__othersProduct">
            <div className="product__othersImage">
              <picture>
                <source srcSet={sharedHeadphonesMobile} media="(max-width: 767px)" />
                <source srcSet={sharedHeadphonesTablet} media="(min-width: 768px) and (max-width: 1440px)" />
                <source srcSet={sharedHeadphonesDesktop} media="(min-width: 1024px)" />
                <img className="product__image" src={sharedHeadphonesMobile} alt="product headphones" />
              </picture>
            </div>
            <h2 className="product__secondaryTitle">XX99 Mark i</h2>
            <button type="submit" className="product__button">See product</button>
          </div>
          <div className="product__othersProduct">
            <div className="product__othersImage">
              <picture>
                <source srcSet={sharedHeadphonesMobile} media="(max-width: 767px)" />
                <source srcSet={sharedHeadphonesTablet} media="(min-width: 768px) and (max-width: 1440px)" />
                <source srcSet={sharedHeadphonesDesktop} media="(min-width: 1024px)" />
                <img className="product__image" src={sharedHeadphonesMobile} alt="product headphones" />
              </picture>
            </div>
            <h2 className="product__secondaryTitle">XX99 Mark i</h2>
            <button type="submit" className="product__button">See product</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;

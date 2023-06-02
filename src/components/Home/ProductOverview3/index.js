import './styles.scss';
import earphonesProductMobile from '../../../assets/images/home/mobile/image-earphones-yx1.jpg';
import earphonesProductTablet from '../../../assets/images/home/tablet/image-earphones-yx1.jpg';
import earphonesProductDesktop from '../../../assets/images/home/desktop/image-earphones-yx1.jpg';

const ProductOverview3 = () => {
  return (
    <section className="productoverview3">
      <div className="productoverview3__container container">
        <picture>
          <source srcSet={earphonesProductMobile} media="(max-width: 767px)" />
          <source srcSet={earphonesProductTablet} media="(min-width: 768px) and (max-width: 1440px)" />
          {/* <source srcSet={earphonesProductdesktop} media="(min-width: 1024px)" /> */}
          <img className="productoverview3__image" src={earphonesProductMobile} alt="speaker" />
        </picture>
      </div>
      <div className="productoverview3__container container">
        <h2 className="productoverview3__title">yx1 earphones</h2>
        <button className="productoverview3__button" type="button">See product</button>
      </div>
    </section>
  );
};

export default ProductOverview3;

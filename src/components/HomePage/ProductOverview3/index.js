import './styles.scss';
import { Link } from 'react-router-dom';
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
          <source srcSet={earphonesProductDesktop} media="(min-width: 1024px)" />
          <img className="productoverview3__image" src={earphonesProductMobile} alt="speaker" />
        </picture>
      </div>
      <div className="productoverview3__container container">
        <h2 className="productoverview3__title">yx1 earphones</h2>
        <Link to="/earphones/yx1-earphones">
          <button
            className="productoverview3__button"
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
              });
            }}
          >See product
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductOverview3;

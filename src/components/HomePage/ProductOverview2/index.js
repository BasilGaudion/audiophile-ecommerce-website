import './styles.scss';
import { Link } from 'react-router-dom';
import speakerTableMobile from '../../../assets/images/home/mobile/image-speaker-zx7.jpg';
import speakerTableTablet from '../../../assets/images/home/tablet/image-speaker-zx7.jpg';
import speakerTableDesktop from '../../../assets/images/home/desktop/image-speaker-zx7.jpg';

const ProductOverview2 = () => {
  return (
    <section className="productoverview2">
      <div className="productoverview2__container container">
        <picture>
          <source srcSet={speakerTableMobile} media="(max-width: 767px)" />
          <source srcSet={speakerTableTablet} media="(min-width: 768px) and (max-width: 1440px)" />
          <source srcSet={speakerTableDesktop} media="(min-width: 1024px)" />
          <img className="productoverview2__image" src={speakerTableMobile} alt="speaker" />
        </picture>
        <h2 className="productoverview2__title">Zx7 Speaker</h2>
        <Link to="/speakers/zx7-speaker">
          <button
            className="productoverview2__button"
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

export default ProductOverview2;

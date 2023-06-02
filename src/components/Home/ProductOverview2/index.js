import './styles.scss';
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
          {/* <source srcSet={circleDesktop} media="(min-width: 1024px)" /> */}
          <img className="productoverview2__image" src={speakerTableMobile} alt="speaker" />
        </picture>
        <h2 className="productoverview2__title">Zx7 Speaker</h2>
        <button className="productoverview2__button" type="button">See product</button>
      </div>
    </section>
  );
};

export default ProductOverview2;

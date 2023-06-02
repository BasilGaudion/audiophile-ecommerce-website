import './styles.scss';
import speaker from '../../../assets/images/desktop/image-speaker-zx9.png';
import circleMobile from '../../../assets/icons/circleMobile.svg';
import circleTablet from '../../../assets/icons/circleTablet.svg';
// import circleDesktop from '../../../assets/icons/circleDesktop.svg';

const ProductOverview1 = () => {
  return (
    <section className="productoverview1">
      <div className="productoverview1__container container">
        <picture>
          <source srcSet={circleMobile} media="(max-width: 767px)" />
          <source srcSet={circleTablet} media="(min-width: 768px) and (max-width: 1440px)" />
          {/* <source srcSet={circleDesktop} media="(min-width: 1024px)" /> */}
          <img className="productoverview1__background" src={circleMobile} alt="" />
        </picture>
        <img className="productoverview1__image" src={speaker} alt="speaker" />
        <h2 className="productoverview1__title">Zx9 Speaker</h2>
        <p className="productoverview1__text">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <button className="productoverview1__button" type="button">See product</button>
      </div>
    </section>
  );
};

export default ProductOverview1;
